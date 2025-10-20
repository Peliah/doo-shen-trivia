import { Stack } from 'expo-router';
import React from 'react';

export default function QuizLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="result" options={{ headerShown: false }} />
            {/* <Stack.Screen name="tech-interests" options={{ headerShown: false }} /> */}
        </Stack>
    );
}
