import fs from 'fs';
import path from 'path'
import { CustomStorageManagement } from './CustomStorageManagement';
import StorageManagement from './StorageManagement';

var dirtest = "./testfiles";
var dirpath = path.join(__dirname,  dirtest)
if(!fs.existsSync(dirpath)){
  fs.mkdirSync(dirpath)
}

(async () => {
  // Test the CustomMessageStore class
  console.log("** Test the CustomMessageStore class **")
  console.log()

  // var messagestore = new StorageManagement(dirtest);

  // Note: Simply comment out the above line and uncomment the
  // line below and we are back to our orginal MessageStore
  // that does not log to Splunk!

  var messagestore = new CustomStorageManagement(dirtest);

  await messagestore.save(99, 'Message 99 saved via MessageStore class')
  var fileMessage99 = messagestore.read(99)
  console.log(fileMessage99)
  console.log()
})();