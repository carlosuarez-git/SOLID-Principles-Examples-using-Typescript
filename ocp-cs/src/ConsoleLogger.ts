import { Logger } from './Logger';

export class ConsoleLogger implements Logger {
    saving(id: number) {
        console.log("ConsoleLogger > Saving message:", id);
    }
    saved(id: number) {
        console.log("ConsoleLogger > saved:", id);
    }
    
    error(err: any) {
        console.error('ConsoleLogger > There was an error: ', err)
    }

    reading(id: number) {
        console.log("ConsoleLogger > message:", id)
    }

    fileExist(exists: boolean) {
        console.log("ConsoleLogger > exists: ", exists)
    }
    
    noFound(id: number) {
        console.log(`ConsoleLogger > No message ${id} found`)
    }

    notInCache(id: number) {
        console.info(`ConsoleLogger > Message id ${id} not in cache`);
    }

    returning(id: number) {
        console.log(`ConsoleLogger > Returning message ${id}`)
    }
}