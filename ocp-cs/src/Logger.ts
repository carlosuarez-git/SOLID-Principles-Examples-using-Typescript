export interface Logger {
    saving(id: number): void;
    saved(id: number): void;
    error(err: any):void
    reading(id: number): void
    fileExist(exists: boolean): void
    noFound(id: number): void
    notInCache(id: number):void
    returning(id: number): void
}