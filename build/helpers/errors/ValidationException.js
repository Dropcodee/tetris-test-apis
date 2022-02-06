"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const BaseValidationError_1 = require("./BaseValidationError");
class ValidationException extends BaseValidationError_1.BaseValidationError {
    statusCode = 415;
    errorOptions;
    constructor(errorData, message) {
        super(message);
        this.errorOptions = errorData;
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
    SerializeErrors() {
        return [...this.errorOptions];
    }
}
exports.ValidationException = ValidationException;
