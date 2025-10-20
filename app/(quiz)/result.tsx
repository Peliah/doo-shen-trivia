import ActionButtons from '@/components/result-review/ActionButtons';
import CategoryPerformanceBars from '@/components/result-review/CategoryPerformanceBars';
import MainMetrics from '@/components/result-review/MainMetrics';
import ProgressCircle from '@/components/result-review/ProgressCircle';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
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
    }>();

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

    // Mock category breakdown - in real app, this would come from the quiz result
    const categoryBreakdown = [{
        category: params.categoryId || 'javascript',
        correct: correctAnswers,
        total: totalQuestions,
        percentage: score,
    }];

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

                {/* Progress Circle */}
                <ProgressCircle score={score} />

                {/* Category Performance */}
                <CategoryPerformanceBars categoryBreakdown={categoryBreakdown} />

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