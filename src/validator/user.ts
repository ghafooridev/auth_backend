import { Request, Response, NextFunction } from "express";
import { ZodError, z } from "zod"
import { ApplicationError } from "../error";
import { Errors } from "../error/errors";

const userSchema = z.object({
    id: z.number().optional(),
    username: z.string(),
    email: z.string(),
    password: z.string().or(z.number()),
    salt: z.string().optional(),
    sessiontoken: z.string().optional()
})

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const parsedRequest = userSchema.parse(req.body);
        next()
    }
    catch (error) {
        throw new ApplicationError({ ...Errors.AUTH_INVALID_INPUT, logging: true });
    }
}