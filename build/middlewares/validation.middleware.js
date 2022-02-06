"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValidationException_1 = require("../helpers/errors/ValidationException");
const validateResource = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    }
    catch (err) {
        throw new ValidationException_1.ValidationException(err.errors, 'Request Validation Error Occurred...');
    }
};
exports.default = validateResource;
