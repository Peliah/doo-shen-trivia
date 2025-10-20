import { NeoBrutalismCard, NeoBrutalismText } from '@/components/neo-brutalism';
import { Colors } from '@/constants/theme';
import { useTheme } from '@/contexts/ThemeContext';
import { CategoryPerformance } from '@/types';
import { getRandomWorker } from '@/utils/workerUtils';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type CategoryPerformanceProps = {
    categoryBreakdown: CategoryPerformance[];
};

export default function CategoryPerformanceBars({ categoryBreakdown }: CategoryPerformanceProps) {
    const { isDark } = useTheme();
    const randomWorker = getRandomWorker();

    const getPerformanceColor = (percentage: number): string => {
        if (percentage >= 80) return '#4CAF50'; // Green
        if (percentage >= 60) return '#FF9800'; // Orange
        if (percentage >= 40) return '#F44336'; // Red
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
            {/* Worker Image */}
            <View style={styles.workerContainer}>
                <Image source={randomWorker} style={styles.workerImage} />
            </View>

            {/* Category Performance */}
            <View style={styles.contentContainer}>
                <NeoBrutalismText variant="subheading" color="primary" style={styles.title}>
                    Category Performance
                </NeoBrutalismText>

                <View style={styles.barsContainer}>
                    {categoryBreakdown.map((category, index) => (
                        <View key={index} style={styles.barContainer}>
                            <View style={styles.barHeader}>
                                <NeoBrutalismText variant="caption" color="primary" style={styles.categoryName}>
                                    {category.category}
                                </NeoBrutalismText>
                                <NeoBrutalismText variant="caption" color="secondary" style={styles.categoryScore}>
                                    {category.correct}/{category.total} ({category.percentage}%)
                                </NeoBrutalismText>
                            </View>

                            <View style={styles.progressBarContainer}>
                                <View
                                    style={[
                                        styles.progressBar,
                                        {
                                            width: `${category.percentage}%`,
                                            backgroundColor: getPerformanceColor(category.percentage),
                                        }
                                    ]}
                                />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </NeoBrutalismCard>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        gap: 20,
        marginBottom: 16,
    },
    workerContainer: {
        width: 100,
        height: 100,
        overflow: 'hidden',
    },
    workerImage: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        width: '100%',
        gap: 16,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    barsContainer: {
        gap: 12,
    },
    barContainer: {
        gap: 4,
    },
    barHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    categoryName: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    categoryScore: {
        fontWeight: 'bold',
    },
    progressBarContainer: {
        height: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 4,
    },
});
