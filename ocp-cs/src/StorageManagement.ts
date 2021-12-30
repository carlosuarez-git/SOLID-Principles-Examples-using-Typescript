import { CacheStore } from './CacheStore';
import { FileStore } from './FileStore';
import { ConsoleLogger } from './ConsoleLogger';

export default class StorageManagement {
    fileStore: FileStore;
    cacheStore: CacheStore;
    logger: ConsoleLogger;

  constructor(_directory: string) {
      this.fileStore = new FileStore(_directory);
      this.cacheStore = new CacheStore();
      this.logger = new ConsoleLogger();
  }

  public async save (id: number, message: string) {
    this.logger.saving(id);
      await this.fileStore.save(id, message)
        .then(() => {
            this.cacheStore.addItem(id, message);
        })
        .catch((err: Error) => {
            this.logger.error(err.message);
        });
  }

  public read(id: number): string {

    let message = '';
    try {
        this.logger.reading(id);
        
        if(!this.cacheStore.hasItem(id)) {
            this.logger.notInCache(id);
            message = this.fileStore.read(id);
            this.cacheStore.addItem(id, message);
        }

        message = this.cacheStore.getItemContent(id)
        this.logger.fileExist(true);
        this.logger.returning(id);

    } catch(err) {
        this.logger.fileExist(false);
        this.logger.noFound(id);
    }

    return message;
  }
}