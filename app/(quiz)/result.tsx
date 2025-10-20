import { NeoBrutalismText } from '@/components/neo-brutalism';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ResultScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <NeoBrutalismText variant="heading" color="primary" style={styles.title}>
                Quiz Result
            </NeoBrutalismText>
        </SafeAreaView>
    )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
    },
})