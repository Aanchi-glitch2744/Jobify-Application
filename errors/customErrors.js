import { StatusCodes } from 'http-status-codes';
export class NotFoundError extends Error {
    constructor(message) {
        super(message); //This line calls the constructor of the Error class and passes the message parameter to it.
        // This sets the error message for the NotFoundError instance.
        this.name = 'NotFoundError';
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}
export class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequestError';
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
export class UnauthenticatedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthenticatedError';
        this.statusCode = StatusCodes.UNAUTHORIZED;
    }
}
export class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UnauthorizedError';
        this.statusCode = StatusCodes.FORBIDDEN;
    }
}