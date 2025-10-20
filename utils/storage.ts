import { Achievement, QuizResult, QuizSession, User } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Storage Keys
const STORAGE_KEYS = {
    USER_DATA: 'user_data',
    QUIZ_SESSIONS: 'quiz_sessions',
    QUIZ_RESULTS: 'quiz_results',
    APP_STATE: 'app_state',
    FIRST_LAUNCH: 'first_launch',
} as const;

// User Data Management
export class UserStorage {
    static async saveUser(user: User): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        }
    }

    static async getUser(): Promise<User | null> {
        try {
            const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA);
            return userData ? JSON.parse(userData) : null;
        } catch (error) {
            console.error('Error loading user data:', error);
            return null;
        }
    }

    static async updateUserStats(userId: string, stats: Partial<User['stats']>): Promise<void> {
        try {
            const user = await this.getUser();
            if (user && user.userId === userId) {
                user.stats = { ...user.stats, ...stats };
                await this.saveUser(user);
            }
        } catch (error) {
            console.error('Error updating user stats:', error);
            throw error;
        }
    }

    static async addAchievement(userId: string, achievement: Achievement): Promise<void> {
        try {
            const user = await this.getUser();
            if (user && user.userId === userId) {
                user.achievements.push(achievement);
                await this.saveUser(user);
            }
        } catch (error) {
            console.error('Error adding achievement:', error);
            throw error;
        }
    }

    static async clearUserData(): Promise<void> {
        try {
            await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA);
        } catch (error) {
            console.error('Error clearing user data:', error);
            throw error;
        }
    }
}

// Quiz Session Management
export class QuizStorage {
    static async saveQuizSession(session: QuizSession): Promise<void> {
        try {
            const sessions = await this.getQuizSessions();
            sessions.push(session);
            await AsyncStorage.setItem(STORAGE_KEYS.QUIZ_SESSIONS, JSON.stringify(sessions));
        } catch (error) {
            console.error('Error saving quiz session:', error);
            throw error;
        }
    }

    static async getQuizSessions(): Promise<QuizSession[]> {
        try {
            const sessions = await AsyncStorage.getItem(STORAGE_KEYS.QUIZ_SESSIONS);
            return sessions ? JSON.parse(sessions) : [];
        } catch (error) {
            console.error('Error loading quiz sessions:', error);
            return [];
        }
    }

    static async getQuizSession(sessionId: string): Promise<QuizSession | null> {
        try {
            const sessions = await this.getQuizSessions();
            return sessions.find(session => session.id === sessionId) || null;
        } catch (error) {
            console.error('Error loading quiz session:', error);
            return null;
        }
    }

    static async updateQuizSession(sessionId: string, updates: Partial<QuizSession>): Promise<void> {
        try {
            const sessions = await this.getQuizSessions();
            const sessionIndex = sessions.findIndex(session => session.id === sessionId);

            if (sessionIndex !== -1) {
                sessions[sessionIndex] = { ...sessions[sessionIndex], ...updates };
                await AsyncStorage.setItem(STORAGE_KEYS.QUIZ_SESSIONS, JSON.stringify(sessions));
            }
        } catch (error) {
            console.error('Error updating quiz session:', error);
            throw error;
        }
    }
}

// Quiz Results Management
export class ResultsStorage {
    static async saveQuizResult(result: QuizResult): Promise<void> {
        try {
            const results = await this.getQuizResults();
            results.push(result);
            await AsyncStorage.setItem(STORAGE_KEYS.QUIZ_RESULTS, JSON.stringify(results));
        } catch (error) {
            console.error('Error saving quiz result:', error);
            throw error;
        }
    }

    static async getQuizResults(): Promise<QuizResult[]> {
        try {
            const results = await AsyncStorage.getItem(STORAGE_KEYS.QUIZ_RESULTS);
            return results ? JSON.parse(results) : [];
        } catch (error) {
            console.error('Error loading quiz results:', error);
            return [];
        }
    }

    static async getQuizResult(sessionId: string): Promise<QuizResult | null> {
        try {
            const results = await this.getQuizResults();
            return results.find(result => result.sessionId === sessionId) || null;
        } catch (error) {
            console.error('Error loading quiz result:', error);
            return null;
        }
    }

    static async getUserResults(userId: string): Promise<QuizResult[]> {
        try {
            const results = await this.getQuizResults();
            return results.filter(result => {
                // Assuming we can get userId from session
                return true; // This would need to be implemented based on your session structure
            });
        } catch (error) {
            console.error('Error loading user results:', error);
            return [];
        }
    }
}

// App State Management
export class AppStorage {
    static async isFirstLaunch(): Promise<boolean> {
        try {
            const isFirstLaunch = await AsyncStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH);
            return isFirstLaunch === null;
        } catch (error) {
            console.error('Error checking first launch:', error);
            return true;
        }
    }

    static async setFirstLaunchComplete(): Promise<void> {
        try {
            await AsyncStorage.setItem(STORAGE_KEYS.FIRST_LAUNCH, 'false');
        } catch (error) {
            console.error('Error setting first launch complete:', error);
            throw error;
        }
    }

    static async clearAllData(): Promise<void> {
        try {
            await AsyncStorage.multiRemove([
                STORAGE_KEYS.USER_DATA,
                STORAGE_KEYS.QUIZ_SESSIONS,
                STORAGE_KEYS.QUIZ_RESULTS,
                STORAGE_KEYS.APP_STATE,
                STORAGE_KEYS.FIRST_LAUNCH,
            ]);
        } catch (error) {
            console.error('Error clearing all data:', error);
            throw error;
        }
    }
}

// Utility Functions
export const generateUserId = (): string => {
    return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const generateSessionId = (): string => {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const calculatePerformanceLevel = (score: number): 'Excellent' | 'Good' | 'Fair' | 'Needs Improvement' => {
    if (score >= 90) return 'Excellent';
    if (score >= 75) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Needs Improvement';
};
