"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.error = function (message) {
        console.log('ERROR: ' + message);
    };
    Logger.warn = function (message) {
        console.log('WARNING: ' + message);
    };
    Logger.info = function (message) {
        console.log('INFO: ' + message);
    };
    Logger.debug = function (message) {
        console.log('DEBUG: ' + message);
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=logger.js.map