import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { User } from '@/types';
import { UserStorage } from '@/utils/storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DashboardHomeScreen() {
    const { isDark } = useTheme();
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                const userData = await UserStorage.getUser();
                setUser(userData);
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
            <View style={styles.content}>
                <NeoBrutalismCard variant="accent" padding="xl" style={styles.welcomeCard}>
                    <NeoBrutalismText variant="heading" color="primary" style={styles.title}>
                        🎉 Welcome back, {user?.username || 'User'}!
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="body" color="primary" style={styles.subtitle}>
                        Ready to test your tech knowledge?
                    </NeoBrutalismText>
                    {user?.techInterests && user.techInterests.length > 0 && (
                        <NeoBrutalismText variant="caption" color="primary" style={styles.interests}>
                            Interests: {user.techInterests.join(', ')}
                        </NeoBrutalismText>
                    )}
                </NeoBrutalismCard>
            </View>
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
        justifyContent: 'center',
        alignItems: 'center',
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
