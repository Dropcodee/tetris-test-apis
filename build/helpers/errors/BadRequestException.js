"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const BaseError_1 = require("./BaseError");
class BadRequestException extends BaseError_1.BaseError {
    constructor(message) {
        let statusCode = 400;
        super(statusCode, message);
    }
}
exports.BadRequestException = BadRequestException;
