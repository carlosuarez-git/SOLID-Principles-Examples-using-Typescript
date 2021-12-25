"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var StoreLogger_1 = require("./StoreLogger");
var StoreCache_1 = require("./StoreCache");
var FileStore_1 = require("./FileStore");
var MessageStore_1 = require("./MessageStore");
var fs = require("fs");
var path = require("path");
var dirtest = "./testfiles";
var dirpath = path.join(__dirname, dirtest);
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}
// Test the StoreLogger class
console.log("** Test the StoreLogger class **");
console.log();
var logger = new StoreLogger_1["default"]();
logger.saving(1);
logger.saved(1);
logger.readingFilestore(1);
logger.didNotFind(1);
logger.readingCache(1);
console.log();
// Test the StoreCache class
console.log("** Test the StoreCache class **");
console.log();
var cache = new StoreCache_1["default"](logger);
cache.addOrUpdate(1, 'Message 1');
console.log(cache.checkCache()); // Should have { '1': 'Message 1'}
var message1 = cache.getOrAdd(1);
console.log(message1); // Should be 'Message 1'
var exists2 = cache.exists(2);
console.log("Message 2 Exists?", exists2);
var message2 = cache.getOrAdd(2, "Message 2");
console.log();
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var filestore, fileInfo, fileMessage1, fileMessage2, fileMessage2, messagestore, fileMessage99;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                // Test the FileStore class
                console.log("** Test the FileStore class **");
                console.log();
                filestore = new FileStore_1["default"](dirtest, logger);
                fileInfo = filestore.getFileInfo(1);
                console.log(fileInfo);
                return [4 /*yield*/, filestore.save(1, 'Message File 1')];
            case 1:
                _a.sent();
                fileMessage1 = filestore.read(1);
                console.log(fileMessage1);
                fileMessage2 = filestore.read(2);
                console.log(fileMessage2);
                return [4 /*yield*/, filestore.save(2, 'Message File 2')];
            case 2:
                _a.sent();
                fileMessage2 = filestore.read(2);
                console.log(fileMessage2);
                console.log();
                // Test the MessageStore class
                console.log("** Test the MessageStore class **");
                console.log();
                messagestore = new MessageStore_1["default"](dirtest);
                return [4 /*yield*/, messagestore.save(99, 'Message 99 saved via MessageStore class')];
            case 3:
                _a.sent();
                fileMessage99 = messagestore.read(99);
                console.log(fileMessage99);
                console.log();
                return [2 /*return*/];
        }
    });
}); })();
