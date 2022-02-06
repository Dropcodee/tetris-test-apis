import {Request, Response, NextFunction} from 'express'
import { ValidationException } from '../helpers/errors/ValidationException';
import { AnyZodObject } from 'zod'

// so this func simply validates every request against the AnyZodObject passed to it as a parameter.
const validateResource = (schema: AnyZodObject) => (req: Request, res: Response, next:NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next()
    } catch (err: any) {
           throw new ValidationException(err.errors, 'Request Validation Error Occurred...')
    }
}

export default validateResource