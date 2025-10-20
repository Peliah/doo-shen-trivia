import { STORAGE_KEYS, StorageUtils } from './base';

// App State Management
export class AppStorage {
    static async isFirstLaunch(): Promise<boolean> {
        try {
            const isFirstLaunch = await StorageUtils.getItem<string>(STORAGE_KEYS.FIRST_LAUNCH);
            return isFirstLaunch === null;
        } catch (error) {
            console.error('Error checking first launch:', error);
            return true;
        }
    }

    static async setFirstLaunchComplete(): Promise<void> {
        await StorageUtils.saveItem(STORAGE_KEYS.FIRST_LAUNCH, 'false');
    }

    static async getAppState(): Promise<any> {
        return await StorageUtils.getItem(STORAGE_KEYS.APP_STATE);
    }

    static async saveAppState(state: any): Promise<void> {
        await StorageUtils.saveItem(STORAGE_KEYS.APP_STATE, state);
    }

    static async clearAllData(): Promise<void> {
        const keys = Object.values(STORAGE_KEYS);
        await StorageUtils.clearAll(keys);
    }

    static async clearUserData(): Promise<void> {
        const userKeys = [
            STORAGE_KEYS.USER_DATA,
            STORAGE_KEYS.QUIZ_SESSIONS,
            STORAGE_KEYS.QUIZ_RESULTS,
        ];
        await StorageUtils.clearAll(userKeys);
    }
}
