import { logger } from "../logger";

enum errorTypes {
    APP_NAME = "APP_NAME",
    INTERNAL = "INTERNAL",
    NETWORK = "NETWORK",
    UNKNOWN = "UNKNOWN",
}

export type ErrorOption = {
    type: errorTypes,
    code: string,
    message: string,
    statusCode: number,
    meta?: any,
    logging?: boolean
}

export class ApplicationError extends Error {
    // public name: string; // from base error class
    // public message: string; // from base error class
    static type = errorTypes
    public code: string;
    public errors: string;
    public meta: string;
    public statusCode: number;
    public logging: boolean;


    constructor(options: ErrorOption) {
        super();
        // for setting the instance of from this class not base Error class
        Object.setPrototypeOf(this, new.target.prototype);

        if (!ApplicationError.type.hasOwnProperty(options.type)) {
            throw new Error(`ApplicationError: ${options.type} is not a valid type.`);
        }

        if (!options.message) {
            throw new Error("ApplicationError: error message required.");
        }

        if (!options.code) {
            throw new Error("ApplicationError: error code required.");
        }

        this.name = "ApplicationError";
        // @ts-ignore
        ApplicationError.type = options.type;
        this.code = options.code;
        this.message = options.message;
        this.meta = options.meta;
        this.statusCode = options.statusCode;
        this.logging = options.logging;

    }

    public async logError(err: Error): Promise<void> {
        debugger
        if (this.logging)
            await logger.error(
                'Error message from the centralized error-handling component',
                err,
            );
    }
}

