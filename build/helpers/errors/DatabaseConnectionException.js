"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseConnectionException = void 0;
const BaseError_1 = require("./BaseError");
class DatabaseConnectionException extends BaseError_1.BaseError {
    constructor(message) {
        let statusCode = 500;
        super(statusCode, message);
    }
}
exports.DatabaseConnectionException = DatabaseConnectionException;
