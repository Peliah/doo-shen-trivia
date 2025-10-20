import { Achievement, User } from '@/types';
import { STORAGE_KEYS, StorageUtils } from './base';

// User Data Management
export class UserStorage {
    static async saveUser(user: User): Promise<void> {
        await StorageUtils.saveItem(STORAGE_KEYS.USER_DATA, user);
    }

    static async getUser(): Promise<User | null> {
        return await StorageUtils.getItem<User>(STORAGE_KEYS.USER_DATA);
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

    static async updateTechInterests(userId: string, interests: string[]): Promise<void> {
        try {
            const user = await this.getUser();
            if (user && user.userId === userId) {
                user.techInterests = interests as any[];
                await this.saveUser(user);
            }
        } catch (error) {
            console.error('Error updating tech interests:', error);
            throw error;
        }
    }

    static async clearUserData(): Promise<void> {
        await StorageUtils.removeItem(STORAGE_KEYS.USER_DATA);
    }
}
