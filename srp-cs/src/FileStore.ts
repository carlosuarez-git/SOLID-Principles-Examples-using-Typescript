import { promises as fsp } from 'fs';
import * as fs from 'fs';
import { Logger } from './Logger';
import { File } from './File';

export class FileStore {
  file: File;
  logger: Logger;
  directory: string;

  constructor(
    public _directory: string) {
      this.directory = _directory;
      this.file = new File(this.directory);
      this.logger = new Logger();
  }

  public async save (id: number, message: string) {
    var fileFullName = this.file.getFileInfo(id);
    await fsp.writeFile(fileFullName, message)
      .catch((err: Error) => {
        throw Error(err.message)
      });
  }

  public read(id: number): string {
    
    const fileFullName = this.file.getFileInfo(id);
    const exists = fs.existsSync(fileFullName);

    if(!exists) {
      throw Error('Not found');
    }
  
    return fs.readFileSync(fileFullName, {encoding: 'ASCII'});
  }
}