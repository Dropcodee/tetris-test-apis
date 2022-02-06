import { Request, Response, NextFunction } from 'express';
import { BaseValidationError } from '../helpers/errors/BaseValidationError';
import { BaseError } from '../helpers/errors/BaseError';

export const ErrorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({name: err.name, code: err.statusCode, message: err.message, stack: err.stack});
  }
  if (err instanceof BaseValidationError) {
    return res.status(err.statusCode).send({ code: err.statusCode, errors: err.SerializeErrors() });
  }
  return res.status(500).send({
    errors: [{ message: 'Something went wrong, retry later', stack: err }],
  });
};
