import StorageManagement from './StorageManagement';
import { SplunkLogger } from './SplunkLogger';

export class CustomStorageManagement extends StorageManagement {

    logger: SplunkLogger;

    constructor(_directory: string) {
        super(_directory);
        this.logger = new SplunkLogger();
    }
}