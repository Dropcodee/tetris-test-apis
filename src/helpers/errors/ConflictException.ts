import { BaseError } from './BaseError';
export class ConflictException extends BaseError {
    constructor(message: string) {
        let statusCode = 409;
        super(statusCode, message);
    }
}
