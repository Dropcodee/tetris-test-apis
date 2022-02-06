import { ValidationErrorType } from '../interfaces/zod-error.interface';

export abstract class BaseValidationError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BaseValidationError.prototype);
  }
// function that defines what the final look/shape of the validation error should be 
// the error type is an interface that shows what every validation error will contain from zod, to the best of my knowledge tho.
  abstract SerializeErrors(): ValidationErrorType[];
}
