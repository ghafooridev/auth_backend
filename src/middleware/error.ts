import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../error";
import { Errors } from "../error/errors";

export async function errorHandler(err: ApplicationError | Error, req: Request, res: Response, next: NextFunction) {

    if (err instanceof ApplicationError) {
        const code = err.statusCode || 500;
        await err.logError(err);
        return res.status(code).json((err))
    }

    if (err instanceof Error) {
        const code = 500
        return res.status(code).json((err))
    }

    const unknownError = new ApplicationError(Errors.UNKNOWN_ERROR)

    return next(unknownError);
}