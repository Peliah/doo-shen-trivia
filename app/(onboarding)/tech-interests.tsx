import { NeoBrutalismButton, NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { TECH_INTERESTS } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { TechInterest } from '@/types';
import { UserStorage } from '@/utils/storage';
import { AppStorage } from '@/utils/storage/app';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInRight, FadeInUp, SlideInLeft } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export default function TechInterestsScreen() {
    const { isDark } = useTheme();
    const [selectedInterests, setSelectedInterests] = useState<string[]>(['web']);

    const toggleInterest = (interest: string) => {
        setSelectedInterests(prev =>
            prev.includes(interest)
                ? prev.filter(i => i !== interest)
                : [...prev, interest]
        );
    };

    const handleFinishSetup = async () => {
        try {
            // Get current user data
            const currentUser = await UserStorage.getUser();
            if (!currentUser) {
                Alert.alert('Error', 'User data not found. Please restart the onboarding process.');
                return;
            }

            // Update user with tech interests
            const updatedUser = {
                ...currentUser,
                techInterests: selectedInterests as TechInterest[]
            };

            await UserStorage.saveUser(updatedUser);

            // Mark onboarding as complete
            await AppStorage.setFirstLaunch(false);

            // Navigate to dashboard
            router.replace('/(dashboard)' as any);
        } catch (error) {
            console.error('Error completing setup:', error);
            Alert.alert('Error', 'Failed to complete setup. Please try again.');
        }
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
            <View style={styles.content}>
                {/* Header */}
                <Animated.View entering={FadeInRight.delay(200)} style={styles.header}>
                    <NeoBrutalismText variant="heading" color="primary" style={styles.title}>
                        Choose Your Tech Interests
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="body" color="secondary" style={styles.subtitle}>
                        We&apos;ll personalize your questions
                    </NeoBrutalismText>
                </Animated.View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Interest Selection */}
                    <Animated.View entering={SlideInLeft.delay(400)} style={styles.interestsSection}>
                        <View style={styles.interestsGrid}>
                            {Object.entries(TECH_INTERESTS).map(([key, interest], index) => (
                                <TouchableOpacityAnimated
                                    key={key}
                                    entering={FadeInUp.delay(600 + index * 100)}
                                    onPress={() => toggleInterest(key)}
                                    activeOpacity={0.8}
                                >
                                    <NeoBrutalismCard
                                        variant={selectedInterests.includes(key) ? 'accent' : 'default'}
                                        padding="lg"
                                        style={styles.interestCard}
                                    >
                                        <Text style={styles.interestIcon}>{interest.icon}</Text>
                                        <NeoBrutalismText
                                            variant="subheading"
                                            color="primary"
                                            style={styles.interestName}
                                        >
                                            {interest.name}
                                        </NeoBrutalismText>
                                        <NeoBrutalismText
                                            variant="caption"
                                            color="secondary"
                                            style={styles.interestDescription}
                                        >
                                            {interest.description}
                                        </NeoBrutalismText>
                                    </NeoBrutalismCard>
                                </TouchableOpacityAnimated>
                            ))}
                        </View>
                    </Animated.View>
                </ScrollView>

                {/* Finish Button */}
                <Animated.View entering={SlideInLeft.delay(1000)} style={styles.buttonContainer}>
                    <NeoBrutalismButton
                        title="Finish Setup"
                        onPress={handleFinishSetup}
                        variant="primary"
                        size="lg"
                        fullWidth
                    />
                </Animated.View>
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
    },
    header: {
        alignItems: 'center',
        marginBottom: 32,
    },
    title: {
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        textAlign: 'center',
    },
    interestsSection: {
        flex: 1,
    },
    interestsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
    },
    interestCard: {
        alignItems: 'center',
        minWidth: 140,
        maxWidth: 160,
    },
    interestIcon: {
        fontSize: 32,
        marginBottom: 8,
    },
    interestName: {
        marginBottom: 4,
        textAlign: 'center',
    },
    interestDescription: {
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 'auto',
        marginBottom: 20,
    },
});
