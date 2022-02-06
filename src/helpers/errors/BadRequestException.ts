import { BaseError } from './BaseError';
export class BadRequestException extends BaseError {
    constructor(message: string) {
        let statusCode = 400;
        super(statusCode, message);
    }
}
