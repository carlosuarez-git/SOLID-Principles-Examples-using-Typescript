export class Logger {
    saving(id: number) {
        console.log("Saving message:", id);
    }
    saved(id: number) {
        console.log("Message saved:", id);
    }
    
    error(err: any) {
        console.error('There was an error: ', err)
    }

    reading(id: number) {
        console.log("Reading message:", id)
    }

    fileExist(exists: boolean) {
        console.log("File exists: ", exists)
    }
    
    noFound(id: number) {
        console.log(`No message ${id} found`)
    }

    notInCache(id: number) {
        console.info(`Message id ${id} not in cache`);
    }

    returning(id: number) {
        console.log(`Returning message ${id}`)
    }

}