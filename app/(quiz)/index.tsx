import LoadingState from '@/components/question/LoadingState';
import { CATEGORIES } from '@/constants/data';
import { getRandomQuestionsByCategory } from '@/constants/question-bank';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { Question, QuizResult, User } from '@/types';
import { ResultsStorage, UserStorage } from '@/utils/storage';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import QuestionScreen from '@/components/question/QuestionScreen';

export default function QuizScreen() {
    const { isDark } = useTheme();
    const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    // Get category from route params or fallback to JavaScript
    const category = CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES.find(cat => cat.id === 'javascript') || CATEGORIES[0];

    useEffect(() => {
        const loadQuestions = () => {
            try {
                const categoryQuestions = getRandomQuestionsByCategory(category.id, 10);
                setQuestions(categoryQuestions);
            } catch (error) {
                console.error('Error loading questions:', error);
                const fallbackQuestions = getRandomQuestionsByCategory('javascript', 10);
                setQuestions(fallbackQuestions);
            } finally {
                setLoading(false);
            }
        };

        loadQuestions();
    }, [category.id]);

    const handleQuizComplete = async (answers: number[], timeTaken: number) => {
        try {
            // Calculate score
            const correctAnswers = answers.filter((answer, index) =>
                answer === questions[index].correctAnswer
            ).length;
            const score = Math.round((correctAnswers / questions.length) * 100);

            // Create quiz result
            const quizResult: QuizResult = {
                sessionId: `quiz_${Date.now()}`,
                score,
                totalQuestions: questions.length,
                timeTaken,
                categoryBreakdown: [{
                    category: category.id,
                    correct: correctAnswers,
                    total: questions.length,
                    percentage: score,
                }],
                questions: answers.map((answer, index) => ({
                    question: questions[index],
                    userAnswer: questions[index].options[answer],
                    isCorrect: answer === questions[index].correctAnswer,
                    timeSpent: 25, // TODO: Track individual question times
                    explanation: questions[index].explanation,
                    referenceLink: questions[index].reference,
                })),
                performanceLevel: score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Needs Improvement',
                createdAt: new Date().toISOString(),
            };

            // Save quiz result
            await ResultsStorage.saveQuizResult(quizResult);

            // Update user stats
            const user = await UserStorage.getUser();
            if (user) {
                const updatedUser: User = {
                    ...user,
                    stats: {
                        ...user.stats,
                        totalGames: user.stats.totalGames + 1,
                        averageScore: Math.round(
                            (user.stats.averageScore * user.stats.totalGames + score) /
                            (user.stats.totalGames + 1)
                        ),
                        bestScore: Math.max(user.stats.bestScore, score),
                        categoryStats: {
                            ...user.stats.categoryStats,
                            [category.id]: {
                                played: (user.stats.categoryStats[category.id]?.played || 0) + 1,
                                average: Math.round(
                                    ((user.stats.categoryStats[category.id]?.average || 0) *
                                        (user.stats.categoryStats[category.id]?.played || 0) + score) /
                                    ((user.stats.categoryStats[category.id]?.played || 0) + 1)
                                ),
                                bestScore: Math.max(user.stats.categoryStats[category.id]?.bestScore || 0, score),
                                totalQuestions: (user.stats.categoryStats[category.id]?.totalQuestions || 0) + questions.length,
                                correctAnswers: (user.stats.categoryStats[category.id]?.correctAnswers || 0) + correctAnswers,
                            },
                        },
                    },
                };
                await UserStorage.saveUser(updatedUser);
            }

            console.log('Quiz completed and saved:', { score, correctAnswers, timeTaken });

            // Navigate to results screen
            router.replace({
                pathname: '/(quiz)/result',
                params: {
                    categoryId: category.id,
                    score: score.toString(),
                    correctAnswers: correctAnswers.toString(),
                    totalQuestions: questions.length.toString(),
                    timeTaken: timeTaken.toString(),
                },
            });
        } catch (error) {
            console.error('Error saving quiz result:', error);
            // Still navigate to results even if saving fails
            router.replace({
                pathname: '/(quiz)/result',
                params: {
                    categoryId: category.id,
                    score: '0',
                    correctAnswers: '0',
                    totalQuestions: questions.length.toString(),
                    timeTaken: timeTaken.toString(),
                },
            });
        }
    };

    const handleBackToDashboard = () => {
        router.back();
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
                <LoadingState message={`Loading ${category.name} questions...`} />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
            <QuestionScreen
                questions={questions}
                category={category}
                onQuizComplete={handleQuizComplete}
                onBackToDashboard={handleBackToDashboard}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
