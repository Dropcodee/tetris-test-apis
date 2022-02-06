import { ValidationErrorType } from '../interfaces/zod-error.interface';
import { BaseValidationError } from './BaseValidationError';

export class ValidationException extends BaseValidationError {
  statusCode = 415;
  errorOptions
  constructor(errorData:  ValidationErrorType[], message: string) {
    super(message);
    this.errorOptions = errorData;
    Object.setPrototypeOf(this, ValidationException.prototype);
  }

  SerializeErrors() {
    return [...this.errorOptions]
  }
}
