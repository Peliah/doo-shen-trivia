import { QuizResult } from '@/types';
import { STORAGE_KEYS, StorageUtils } from './base';

// Quiz Results Management
export class ResultsStorage {
    static async saveQuizResult(result: QuizResult): Promise<void> {
        try {
            const results = await this.getQuizResults();
            results.push(result);
            await StorageUtils.saveItem(STORAGE_KEYS.QUIZ_RESULTS, results);
        } catch (error) {
            console.error('Error saving quiz result:', error);
            throw error;
        }
    }

    static async getQuizResults(): Promise<QuizResult[]> {
        return await StorageUtils.getItem<QuizResult[]>(STORAGE_KEYS.QUIZ_RESULTS) || [];
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
            // Filter results by userId (assuming we can get userId from session)
            return results.filter(result => {
                // This would need to be implemented based on your session structure
                return true; // Placeholder - implement based on your needs
            });
        } catch (error) {
            console.error('Error loading user results:', error);
            return [];
        }
    }

    static async getRecentResults(userId: string, limit: number = 10): Promise<QuizResult[]> {
        try {
            const results = await this.getUserResults(userId);
            return results
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, limit);
        } catch (error) {
            console.error('Error loading recent results:', error);
            return [];
        }
    }

    static async getCategoryResults(userId: string, category: string): Promise<QuizResult[]> {
        try {
            const results = await this.getUserResults(userId);
            return results.filter(result => {
                // This would need to be implemented based on your result structure
                return true; // Placeholder - implement based on your needs
            });
        } catch (error) {
            console.error('Error loading category results:', error);
            return [];
        }
    }

    static async clearQuizResults(): Promise<void> {
        await StorageUtils.removeItem(STORAGE_KEYS.QUIZ_RESULTS);
    }
}
