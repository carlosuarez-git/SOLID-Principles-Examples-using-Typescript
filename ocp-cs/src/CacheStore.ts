import { Cache } from './Cache';

export class CacheStore {

    cache: Cache;

    constructor() {
        this.cache = {};
    }

    checkCache() {
        return this.cache;
    }

    addItem(id: number, message: string) {
        this.cache[id] = message;
    }

    getItemContent(id: number): string {

        if (this.hasItem(id)) {
            return this.cache[id];
        }

        return '';
    }
    hasItem(id: number): boolean {

        if (this.cache[id]) {
            return true;
        }

        return false;
    }
}