"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMiddleware = void 0;
const BaseValidationError_1 = require("../helpers/errors/BaseValidationError");
const BaseError_1 = require("../helpers/errors/BaseError");
// ok the bad boy
// this handles all error types coming from the application unless there is something i'm missing lol
const ErrorMiddleware = (err, req, res, next) => {
    // every error with an instance of BaseError which you can find under helpers/errors
    // this helps control how the output for BaseError exceptions should look to the frontend dev
    if (err instanceof BaseError_1.BaseError) {
        return res.status(err.statusCode).send({ name: err.name, code: err.statusCode, message: err.message, stack: err.stack });
    }
    // because the shape of data for the validation is different so we have to check for the instance of that as well
    // as a master yoda will say "The greatest teacher, failure is." have failed here well to realize i have to check for the
    // validation instance.
    if (err instanceof BaseValidationError_1.BaseValidationError) {
        return res.status(err.statusCode).send({ code: err.statusCode, errors: err.SerializeErrors() });
    }
    // and incase of random errors that shows their ugly face, this should handle them
    // and also show the stack so we can debug better.
    return res.status(500).send({
        errors: [{ message: 'Something went wrong, retry later', stack: err }],
    });
};
exports.ErrorMiddleware = ErrorMiddleware;
