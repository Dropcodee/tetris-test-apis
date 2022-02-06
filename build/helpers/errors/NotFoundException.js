"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const BaseError_1 = require("./BaseError");
class NotFoundException extends BaseError_1.BaseError {
    constructor(message) {
        let statusCode = 404;
        super(statusCode, message);
    }
}
exports.NotFoundException = NotFoundException;
