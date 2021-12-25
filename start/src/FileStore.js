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
var fs_1 = require("fs");
var fs = require("fs");
var path = require("path");
var FileStore = /** @class */ (function () {
    /**
     *
     * @param _directory the directory where to save the file to
     *
     * This is the constructor of the FileStore Class
     * It sets the directory to use for saving the file
     * and also resets the cache object
     */
    function FileStore(_directory) {
        this._directory = _directory;
        this.directory = _directory;
        this.cache = {};
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
    FileStore.prototype.save = function (id, message) {
        return __awaiter(this, void 0, void 0, function () {
            var fileFullName;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Saving message:", id);
                        fileFullName = this.getFileInfo(id);
                        return [4 /*yield*/, fs_1.promises.writeFile(fileFullName, message).then(function () {
                                _this.cache[id] = message;
                                console.log("Message saved:", id);
                            })["catch"](function (err) { return console.error('There was an error: ', err); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
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
    FileStore.prototype.read = function (id) {
        console.log("Reading message:", id);
        var fileFullName = this.getFileInfo(id);
        var exists = fs.existsSync(fileFullName);
        console.log("File exists: ", exists);
        if (!exists) {
            console.log("No message " + id + " found");
            return '';
        }
        // We want to get from the cache or add it to the cache
        if (!this.cache.hasOwnProperty(id)) {
            console.info("Message id " + id + " not in cache");
            var data = fs.readFileSync(fileFullName, { encoding: 'ASCII' });
            this.cache[id] = data;
        }
        var message = this.cache[id];
        console.log("Returning message " + id);
        return message;
    };
    // Public getter to check the state of the cache during testing
    FileStore.prototype.checkCache = function () {
        return this.cache;
    };
    // Private method to prepare the full file info
    FileStore.prototype.getFileInfo = function (id) {
        return path.join(__dirname, this.directory, id + ".txt");
    };
    return FileStore;
}());
exports["default"] = FileStore;
