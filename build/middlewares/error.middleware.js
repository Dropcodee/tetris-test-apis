"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const BaseValidationError_1 = require("../helpers/errors/BaseValidationError");
const BaseError_1 = require("../helpers/errors/BaseError");
const ErrorMiddleware = (err, req, res, next) => {
    if (err instanceof BaseError_1.BaseError) {
        return res.status(err.statusCode).send({ name: err.name, code: err.statusCode, message: err.message, stack: err.stack });
    }
    if (err instanceof BaseValidationError_1.BaseValidationError) {
        return res.status(err.statusCode).send({ code: err.statusCode, errors: err.SerializeErrors() });
    }
    return res.status(500).send({
        errors: [{ message: 'Something went wrong, retry later', stack: err }],
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
