export class BaseError extends Error {
    public readonly name: string; // class name defines what the error class is
    public readonly statusCode: number; // status code of err
    constructor(statusCode: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);

        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.message = message
        Error.captureStackTrace(this); // getting the error stack, might come in handy
    }
}
