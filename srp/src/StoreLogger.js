"use strict";
exports.__esModule = true;
var StoreLogger = /** @class */ (function () {
    function StoreLogger() {
    }
    StoreLogger.prototype.saving = function (id) {
        console.log("Saving message " + id + ".");
    };
    StoreLogger.prototype.saved = function (id) {
        console.info("Saved message " + id + ".");
    };
    StoreLogger.prototype.readingFilestore = function (id) {
        console.debug("Reading message " + id + " from FileStore.");
    };
    StoreLogger.prototype.readingCache = function (id) {
        console.debug("Reading message " + id + " from StoreCache.");
    };
    StoreLogger.prototype.didNotFind = function (id) {
        console.debug("No message " + id + " found.");
    };
    StoreLogger.prototype.missingFromCache = function (id) {
        console.debug("Message " + id + " missing from cache.");
    };
    StoreLogger.prototype.returning = function (id) {
        console.debug("Returning message " + id + ".");
    };
    StoreLogger.prototype.errorSaving = function (id) {
        console.debug("Error saving message " + id + ".");
    };
    return StoreLogger;
}());
exports["default"] = StoreLogger;
