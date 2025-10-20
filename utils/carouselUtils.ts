import { CATEGORIES } from '@/constants/data';

export function getLoopingCategories() {
    const baseItems = CATEGORIES;
    const data = [{ key: 'left-spacer' }, ...baseItems, ...baseItems, ...baseItems, { key: 'right-spacer' }];
    return { baseItems, data };
}


