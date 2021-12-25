import * as path from 'path'

export class File {

    directory: string;

    constructor(directory: string) {
        this.directory = directory;
    }

    getFileInfo(id: number): string {
        return path.join(__dirname, this.directory, `${id}.txt`)
    }
}