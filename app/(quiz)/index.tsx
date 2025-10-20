import ErrorState from '@/components/question/ErrorState';
import LoadingState from '@/components/question/LoadingState';
import QuestionScreen from '@/components/question/QuestionScreen';
import { CATEGORIES } from '@/constants/data';
import { getRandomQuestionsByCategory } from '@/constants/question-bank';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Question } from '@/types';

export default function QuizScreen() {
    const { isDark } = useTheme();
    const { categoryId } = useLocalSearchParams<{ categoryId: string }>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    // Get category from route params or fallback to JavaScript
    const category = CATEGORIES.find(cat => cat.id === categoryId) || CATEGORIES.find(cat => cat.id === 'javascript') || CATEGORIES[0];

    useEffect(() => {
        // Load questions for the selected category
        const loadQuestions = () => {
            try {
                const categoryQuestions = getRandomQuestionsByCategory(category.id, 10);
                setQuestions(categoryQuestions);
            } catch (error) {
                console.error('Error loading questions:', error);
                // Fallback to JavaScript questions
                const fallbackQuestions = getRandomQuestionsByCategory('javascript', 10);
                setQuestions(fallbackQuestions);
            } finally {
                setLoading(false);
            }
        };

        loadQuestions();
    }, [category.id]);

    const handleQuizComplete = (answers: number[], timeTaken: number) => {
        console.log('Quiz completed:', { answers, timeTaken, category: category.name });
        // TODO: Navigate to results screen
        router.back();
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

    if (questions.length === 0) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
                <ErrorState
                    message={`No questions available for ${category.name}. Please try another category.`}
                    onRetry={() => {
                        setLoading(true);
                        const categoryQuestions = getRandomQuestionsByCategory(category.id, 10);
                        setQuestions(categoryQuestions);
                        setLoading(false);
                    }}
                />
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
