"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseValidationError = void 0;
class BaseValidationError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, BaseValidationError.prototype);
    }
}
exports.BaseValidationError = BaseValidationError;
