"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = void 0;
const BaseError_1 = require("./BaseError");
class ConflictException extends BaseError_1.BaseError {
    constructor(message) {
        let statusCode = 409;
        super(statusCode, message);
    }
}
exports.ConflictException = ConflictException;
