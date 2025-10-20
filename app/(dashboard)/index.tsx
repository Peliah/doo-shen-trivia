import MainDashboardHeader from '@/components/main-dashboard/Header';
import QuizCarousel from '@/components/main-dashboard/QuizCarousel';
import RecentQuizzes from '@/components/main-dashboard/RecentQuizzes';
import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { QuizResult, User } from '@/types';
import { ResultsStorage, UserStorage } from '@/utils/storage';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardHomeScreen() {
    const { isDark } = useTheme();
    const [user, setUser] = useState<User | null>(null);
    const [recentQuizzes, setRecentQuizzes] = useState<QuizResult[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await UserStorage.getUser();
                setUser(userData);

                // Load recent quiz results
                const quizResults = await ResultsStorage.getQuizResults();
                // Sort by creation date (most recent first) and take first 3
                const sortedResults = quizResults
                    .sort((a: QuizResult, b: QuizResult) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                    .slice(0, 3);
                setRecentQuizzes(sortedResults);
            } catch (error) {
                console.error('Error loading user data:', error);
            } finally {
                setLoading(false);
            }
        };

        loadUserData();
    }, []);

    if (loading) {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
                <View style={styles.content}>
                    <NeoBrutalismCard variant="default" padding="xl" style={styles.welcomeCard}>
                        <NeoBrutalismText variant="body" color="primary" style={styles.subtitle}>
                            Loading...
                        </NeoBrutalismText>
                    </NeoBrutalismCard>
                </View>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
            <View style={styles.headerContainer}>
                <MainDashboardHeader user={user} points={user?.stats?.totalGames ?? 0} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
                <QuizCarousel />
                <RecentQuizzes recentQuizzes={recentQuizzes} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 20,
        gap: 16,
        // alignItems: 'center',
    },
    headerContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#000',
    },
    welcomeCard: {
        alignItems: 'center',
        maxWidth: 300,
    },
    title: {
        marginBottom: 16,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
    },
    interests: {
        marginTop: 8,
        textAlign: 'center',
        fontStyle: 'italic',
    },
});
