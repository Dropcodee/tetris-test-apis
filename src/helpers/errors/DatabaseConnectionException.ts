import { BaseError } from './BaseError';
export class DatabaseConnectionException extends BaseError {
    constructor(message: string) {
        let statusCode = 500;
        super(statusCode, message);
    }
}
