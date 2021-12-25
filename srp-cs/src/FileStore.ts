import { promises as fsp } from 'fs';
import * as fs from 'fs';
import { Logger } from './Logger';
import { CacheStore } from './CacheStore';
import { File } from './File';

export default class FileStore {
  file: File;
  directory: string;

  /**
   *
   * @param _directory the directory where to save the file to
   *
   * This is the constructor of the FileStore Class
   * It sets the directory to use for saving the file
   * and also resets the cache object
   */
  constructor(
    public _directory: string, 
    private logger: Logger,
    private cacheStore: CacheStore) {
      this.directory = _directory;
      this.file = new File(this.directory);
  }

  /**
   *
   * @param id the id of the file to save
   * @param message the text message to write to the file
   *
   * Function writes the file to disk using the id as part
   * of the filename. The id is a number and the file name is
   * formed as a .txt file using the pattern id.txt. Its saved
   * in the relative directory as set in the constructor.
   */
  public async save (id: number, message: string) {
    this.logger.saving(id);
    var fileFullName = this.file.getFileInfo(id);
    await fsp.writeFile(fileFullName, message).then(() => {
      this.cacheStore.addItem(id, message);
      this.logger.saved(id);
    }).catch((err: any) => this.logger.error(err))
  }

  /**
   *
   * @param id the id of the file to read
   *
   * Function checks if the file exists and
   * if not returns an empty string.
   * If the file does exist then the function
   * checks if the file id is in the cache and
   * if not will read the contents of the file
   * from disk and add to the cache.
   *
   * @returns message string
   */
  public read(id: number): string {
    this.logger.reading(id);
    const fileFullName = this.file.getFileInfo(id);
    const exists = fs.existsSync(fileFullName);
    this.logger.fileExist(exists);

    if(!exists) {
      this.logger.noFound(id);
      return ''
    }
    // We want to get from the cache or add it to the cache
    if(!this.cacheStore.hasItem(id)) {
      this.logger.notInCache(id);
      var data = fs.readFileSync(fileFullName, {encoding: 'ASCII'});
      this.cacheStore.addItem(id, data);
    }
    var message = this.cacheStore.getItemContent(id)
    this.logger.returning(id);
    return message;
  }
}