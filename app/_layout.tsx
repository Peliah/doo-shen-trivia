import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';

import { ThemeProvider as CustomThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { AppStorage } from '@/utils/storage/app';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <CustomThemeProvider>
      <ThemeProviderWrapper />
    </CustomThemeProvider>
  );
}

function ThemeProviderWrapper() {
  const { isDark } = useTheme();
  const router = useRouter();

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const isFirstLaunch = await AppStorage.isFirstLaunch();

        if (isFirstLaunch) {
          // First time user - go to onboarding
          router.replace('/(onboarding)' as any);
        } else {
          // Returning user - go to dashboard
          router.replace('/(dashboard)' as any);
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
        // Default to onboarding on error
        router.replace('/(onboarding)' as any);
      }
    };

    checkFirstLaunch();
  }, [router]);

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
