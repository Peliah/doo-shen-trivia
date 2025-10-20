import ActionButtons from '@/components/result-review/ActionButtons';
import MainMetrics from '@/components/result-review/MainMetrics';
import QuestionReview from '@/components/result-review/QuestionReview';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { QuestionResult } from '@/types';
import { ResultsStorage } from '@/utils/storage';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ResultScreen() {
    const { isDark } = useTheme();
    const params = useLocalSearchParams<{
        categoryId: string;
        score: string;
        correctAnswers: string;
        totalQuestions: string;
        timeTaken: string;
        sessionId?: string;
    }>();

    const [questionResults, setQuestionResults] = useState<QuestionResult[]>([]);
    const [loading, setLoading] = useState(true);

    const score = parseInt(params.score || '0');
    const correctAnswers = parseInt(params.correctAnswers || '0');
    const totalQuestions = parseInt(params.totalQuestions || '10');
    const timeTaken = parseInt(params.timeTaken || '0');

    const getPerformanceLevel = (score: number): string => {
        if (score >= 80) return 'Excellent';
        if (score >= 60) return 'Good';
        if (score >= 40) return 'Fair';
        return 'Needs Improvement';
    };

    const performanceLevel = getPerformanceLevel(score);

    useEffect(() => {
        const loadQuizResult = async () => {
            try {
                if (params.sessionId) {
                    const quizResult = await ResultsStorage.getQuizResult(params.sessionId);
                    if (quizResult) {
                        setQuestionResults(quizResult.questions);
                    }
                }
            } catch (error) {
                console.error('Error loading quiz result:', error);
            } finally {
                setLoading(false);
            }
        };

        loadQuizResult();
    }, [params.sessionId]);

    const handleDetailedReview = () => {
        // TODO: Navigate to detailed review screen
        console.log('Navigate to detailed review');
    };

    const handlePlayAgain = () => {
        // Navigate back to quiz with same category
        router.push({
            pathname: '/(quiz)' as any,
            params: { categoryId: params.categoryId }
        });
    };

    const handleBackToDashboard = () => {
        router.replace('/(dashboard)' as any);
    };

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
                {/* Loading state */}
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Main Metrics */}
                <MainMetrics
                    score={score}
                    totalQuestions={totalQuestions}
                    correctAnswers={correctAnswers}
                    timeTaken={timeTaken}
                    performanceLevel={performanceLevel}
                />

                {/* Question Review */}
                {questionResults.length > 0 && (
                    <QuestionReview questions={questionResults} />
                )}

                {/* Action Buttons */}
                <ActionButtons
                    onDetailedReview={handleDetailedReview}
                    onPlayAgain={handlePlayAgain}
                    onBackToDashboard={handleBackToDashboard}
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingVertical: 20,
    },
});