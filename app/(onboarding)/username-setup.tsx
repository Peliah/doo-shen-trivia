import { NeoBrutalismButton, NeoBrutalismCard, NeoBrutalismInput, NeoBrutalismText } from '@/components/neo-brutalism';
import { AVATAR_OPTIONS } from '@/constants/data';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInRight, FadeInUp, SlideInLeft } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const TouchableOpacityAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export default function UsernameSetupScreen() {
    const { isDark } = useTheme();
    const [username, setUsername] = useState('');
    const [selectedAvatar, setSelectedAvatar] = useState('developer');

    const validateUsername = (name: string): boolean => {
        return name.length >= 3 && name.length <= 15 && /^[a-zA-Z0-9_]+$/.test(name);
    };

    const handleContinue = () => {
        if (!validateUsername(username)) {
            Alert.alert('Invalid Username', 'Username must be 3-15 characters and contain only letters, numbers, and underscores.');
            return;
        }
        router.push('/(onboarding)/tech-interests');
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: isDark ? Colors.dark.background : Colors.light.background }]}>
            <View style={styles.content}>
                {/* Header */}
                <Animated.View entering={FadeInRight.delay(200)} style={styles.header}>
                    <NeoBrutalismText variant="heading" color="primary" style={styles.title}>
                        Let&apos;s Get Started
                    </NeoBrutalismText>
                    <NeoBrutalismText variant="body" color="secondary" style={styles.subtitle}>
                        Choose your username and avatar
                    </NeoBrutalismText>
                </Animated.View>

                {/* Username Input */}
                <Animated.View entering={SlideInLeft.delay(400)} style={styles.inputSection}>
                    <NeoBrutalismInput
                        label="Username"
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={setUsername}
                        variant="default"
                        size="lg"
                        error={username.length > 0 && !validateUsername(username) ? 'Invalid username' : undefined}
                    />
                    <NeoBrutalismText variant="caption" color="muted" style={styles.hint}>
                        3-15 characters, letters, numbers, underscores
                    </NeoBrutalismText>
                </Animated.View>

                {/* Avatar Selection */}
                <Animated.View entering={SlideInLeft.delay(600)} style={styles.avatarSection}>
                    <NeoBrutalismText variant="subheading" color="primary" style={styles.label}>
                        Choose Avatar
                    </NeoBrutalismText>
                    <View style={styles.avatarGrid}>
                        {AVATAR_OPTIONS.map((avatar) => (
                            <TouchableOpacityAnimated
                                key={avatar.id}
                                entering={FadeInUp.delay(800 + AVATAR_OPTIONS.indexOf(avatar) * 100)}
                                onPress={() => setSelectedAvatar(avatar.id)}
                            >
                                <NeoBrutalismCard
                                    variant={selectedAvatar === avatar.id ? 'accent' : 'default'}
                                    padding="base"
                                    style={styles.avatarOption}
                                >
                                    <Text style={styles.avatarEmoji}>{avatar.emoji}</Text>
                                    <NeoBrutalismText variant="caption" color="primary" style={styles.avatarName}>
                                        {avatar.name}
                                    </NeoBrutalismText>
                                </NeoBrutalismCard>
                            </TouchableOpacityAnimated>
                        ))}
                    </View>
                </Animated.View>

                {/* Continue Button */}
                <Animated.View entering={SlideInLeft.delay(1000)} style={styles.buttonContainer}>
                    <NeoBrutalismButton
                        title="Continue"
                        onPress={handleContinue}
                        variant="primary"
                        size="lg"
                        fullWidth
                        disabled={!validateUsername(username)}
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
    },
    subtitle: {
        textAlign: 'center',
    },
    inputSection: {
        marginBottom: 32,
    },
    hint: {
        marginTop: 8,
    },
    avatarSection: {
        marginBottom: 40,
    },
    label: {
        marginBottom: 16,
    },
    avatarGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 12,
        justifyContent: 'center',
    },
    avatarOption: {
        alignItems: 'center',
        minWidth: 80,
    },
    avatarEmoji: {
        fontSize: 24,
        marginBottom: 4,
    },
    avatarName: {
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 'auto',
        marginBottom: 20,
    },
});
