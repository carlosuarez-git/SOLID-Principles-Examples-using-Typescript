import { Logger } from './Logger'
import { CacheStore } from './CacheStore'
import { FileStore } from './FileStore'
import StorageManagement from './StorageManagement';
import * as fs from 'fs';
import * as path from 'path'

var dirtest = "./testfiles";
var dirpath = path.join(__dirname,  dirtest)
if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath)
}

// Test the Logger class
console.log("** Test the Logger class **")
console.log()
var logger = new Logger()
logger.saving(1);
logger.saved(1);
logger.reading(1);
logger.noFound(1);
logger.reading(1);
console.log()

// Test the CacheStore class
console.log("** Test the CacheStore class **")
console.log()
var cache = new CacheStore();
cache.addItem(1, 'Message 1')
console.log(cache.checkCache()) // Should have { '1': 'Message 1'}
var message1 = cache.getItemContent(1);
console.log(message1) // Should be 'Message 1'
var exists2 = cache.hasItem(2)
console.log("Message 2 Exists?", exists2)
var message2 = cache.addItem(2, "Message 2");
console.log();

(async () => {
  // Test the FileStore class
  console.log("** Test the FileStore class **")
  console.log()
  var filestore = new FileStore(dirtest)
  var fileInfo = filestore.file.getFileInfo(1)
  console.log(fileInfo);
  await filestore.save(1, 'Message File 1')
  var fileMessage1 = filestore.read(1)
  console.log(fileMessage1)
  var fileMessage2 = filestore.read(2)
  console.log(fileMessage2)
  await filestore.save(2, 'Message File 2')
  var fileMessage2 = filestore.read(2)
  console.log(fileMessage2)
  console.log()

  // Test the MessageStore class
  console.log("** Test the MessageStore class **")
  console.log()
  var storageManagement = new StorageManagement(dirtest);
  await storageManagement.save(99, 'Message 99 saved via StorageManagement class')
  var fileMessage99 = storageManagement.read(99)
  console.log(fileMessage99)
  console.log()
})();