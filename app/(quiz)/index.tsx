import LoadingState from '@/components/question/LoadingState';
import { CATEGORIES } from '@/constants/data';
import { getRandomQuestionsByCategory } from '@/constants/question-bank';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import QuestionScreen from '@/components/question/QuestionScreen';
import { Question } from '@/types';

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

    const handleQuizComplete = (answers: number[], timeTaken: number) => {
        console.log('Quiz completed:', { answers, timeTaken, category: category.name });
        router.replace({
            pathname: '/(quiz)/result',
            params: {
                categoryId: category.id,
                answers,
                timeTaken,
            },
        });
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
