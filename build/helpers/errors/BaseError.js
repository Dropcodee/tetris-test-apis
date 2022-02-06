"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseError = void 0;
class BaseError extends Error {
    name; // class name defines what the error class is
    statusCode; // status code of err
    constructor(statusCode, message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.message = message;
        Error.captureStackTrace(this); // getting the error stack, might come in handy
    }
}
exports.BaseError = BaseError;
