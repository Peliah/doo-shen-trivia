import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage Keys Configuration
export const STORAGE_KEYS = {
    USER_DATA: 'user_data',
    QUIZ_SESSIONS: 'quiz_sessions',
    QUIZ_RESULTS: 'quiz_results',
    APP_STATE: 'app_state',
    FIRST_LAUNCH: 'first_launch',
} as const;

// Generic Storage Utilities
export class StorageUtils {
    static async saveItem<T>(key: string, data: T): Promise<void> {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error(`Error saving ${key}:`, error);
            throw error;
        }
    }

    static async getItem<T>(key: string): Promise<T | null> {
        try {
            const data = await AsyncStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(`Error loading ${key}:`, error);
            return null;
        }
    }

    static async removeItem(key: string): Promise<void> {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing ${key}:`, error);
            throw error;
        }
    }

    static async clearAll(keys: string[]): Promise<void> {
        try {
            await AsyncStorage.multiRemove(keys);
        } catch (error) {
            console.error('Error clearing storage:', error);
            throw error;
        }
    }
}
