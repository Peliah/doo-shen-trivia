import { QuizSession } from '@/types';
import { STORAGE_KEYS, StorageUtils } from './base';

// Quiz Session Management
export class QuizStorage {
    static async saveQuizSession(session: QuizSession): Promise<void> {
        try {
            const sessions = await this.getQuizSessions();
            sessions.push(session);
            await StorageUtils.saveItem(STORAGE_KEYS.QUIZ_SESSIONS, sessions);
        } catch (error) {
            console.error('Error saving quiz session:', error);
            throw error;
        }
    }

    static async getQuizSessions(): Promise<QuizSession[]> {
        return await StorageUtils.getItem<QuizSession[]>(STORAGE_KEYS.QUIZ_SESSIONS) || [];
    }

    static async getQuizSession(sessionId: string): Promise<QuizSession | null> {
        try {
            const sessions = await this.getQuizSessions();
            return sessions.find(session => session.sessionId === sessionId) || null;
        } catch (error) {
            console.error('Error loading quiz session:', error);
            return null;
        }
    }

    static async updateQuizSession(sessionId: string, updates: Partial<QuizSession>): Promise<void> {
        try {
            const sessions = await this.getQuizSessions();
            const sessionIndex = sessions.findIndex(session => session.sessionId === sessionId);

            if (sessionIndex !== -1) {
                sessions[sessionIndex] = { ...sessions[sessionIndex], ...updates };
                await StorageUtils.saveItem(STORAGE_KEYS.QUIZ_SESSIONS, sessions);
            }
        } catch (error) {
            console.error('Error updating quiz session:', error);
            throw error;
        }
    }

    static async getUserSessions(userId: string): Promise<QuizSession[]> {
        try {
            const sessions = await this.getQuizSessions();
            return sessions.filter(session => session.userId === userId);
        } catch (error) {
            console.error('Error loading user sessions:', error);
            return [];
        }
    }

    static async getActiveSession(userId: string): Promise<QuizSession | null> {
        try {
            const sessions = await this.getQuizSessions();
            return sessions.find(session =>
                session.userId === userId && !session.isCompleted
            ) || null;
        } catch (error) {
            console.error('Error loading active session:', error);
            return null;
        }
    }

    static async clearQuizSessions(): Promise<void> {
        await StorageUtils.removeItem(STORAGE_KEYS.QUIZ_SESSIONS);
    }
}
