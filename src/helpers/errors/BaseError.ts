export class BaseError extends Error {
    public readonly name: string;
    public readonly statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.message = message
        Error.captureStackTrace(this);
    }
}
