import { NeoBrutalismCard } from '@/components/neo-brutalism';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { getRandomWorker } from '@/utils/workerUtils';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type ProgressCircleProps = {
    score: number;
    size?: number;
};

export default function ProgressCircle({ score, size = 120 }: ProgressCircleProps) {
    const { isDark } = useTheme();
    const randomWorker = getRandomWorker();

    const radius = (size - 20) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    const getScoreColor = (score: number): string => {
        if (score >= 80) return '#4CAF50'; // Green
        if (score >= 60) return '#FF9800'; // Orange
        if (score >= 40) return '#F44336'; // Red
        return '#9E9E9E'; // Gray
    };

    return (
        <NeoBrutalismCard
            variant="default"
            padding="lg"
            style={{
                ...styles.container,
                backgroundColor: isDark ? Colors.dark.cardBackground : Colors.light.cardBackground,
            }}
        >
            <View style={styles.workerContainer}>
                <Image source={randomWorker} style={styles.workerImage} />
            </View>

        </NeoBrutalismCard>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        marginBottom: 16,
    },
    workerContainer: {
        width: 100,
        height: 100,
    },
    workerImage: {
        width: '100%',
        height: '100%',
    },
    circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    svg: {
        position: 'absolute',
    },
    scoreContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scoreText: {
        fontWeight: 'bold',
        fontSize: 24,
    },
});
