import { ValidationErrorType } from '../interfaces/zod-error.interface';

export abstract class BaseValidationError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseValidationError.prototype);
  }

  abstract SerializeErrors(): ValidationErrorType[];
}
