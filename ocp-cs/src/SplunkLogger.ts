import { Logger } from "./Logger";

export class SplunkLogger implements Logger {
    saving(id: number) {
        console.log("SplunkLogger > Saving message:", id);
    }
    saved(id: number) {
        console.log("SplunkLogger > saved:", id);
    }
    
    error(err: any) {
        console.error('SplunkLogger > There was an error: ', err)
    }

    reading(id: number) {
        console.log("SplunkLogger > message:", id)
    }

    fileExist(exists: boolean) {
        console.log("SplunkLogger > exists: ", exists)
    }
    
    noFound(id: number) {
        console.log(`SplunkLogger > No message ${id} found`)
    }

    notInCache(id: number) {
        console.info(`SplunkLogger > Message id ${id} not in cache`);
    }

    returning(id: number) {
        console.log(`SplunkLogger > Returning message ${id}`)
    }
}