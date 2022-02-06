import { BaseError } from './BaseError';
export class NotFoundException extends BaseError {
    constructor(message: string) {
        let statusCode = 404;
        super(statusCode, message);
    }
}
