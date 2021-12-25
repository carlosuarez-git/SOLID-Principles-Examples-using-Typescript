"use strict";
exports.__esModule = true;
var StoreCache = /** @class */ (function () {
    function StoreCache(_logger) {
        this.cache = {};
        this.logger = _logger;
    }
    StoreCache.prototype.addOrUpdate = function (id, message) {
        this.cache[id] = message;
    };
    StoreCache.prototype.getOrAdd = function (id, message) {
        this.logger.readingCache(id);
        if (!this.exists(id)) {
            if (message === undefined) {
                throw new Error("Message expected when file does not exist");
            }
            this.logger.missingFromCache(id);
            // Save the file contents to the cache
            this.addOrUpdate(id, message);
        }
        return this.cache[id];
    };
    StoreCache.prototype.exists = function (id) {
        return this.cache.hasOwnProperty(id);
    };
    StoreCache.prototype.checkCache = function () {
        return this.cache;
    };
    return StoreCache;
}());
exports["default"] = StoreCache;
