import { ApplicationError, ErrorOption } from "./index"

export const Errors = {
    AUTH_INVALID_INPUT: {
        type: ApplicationError.type.APP_NAME,
        code: 'AUTH_INVALID_INPUT',
        message: 'The given input is incorrect',
        statusCode: 400
    },
    EMAIL_ALREADY_TAKEN: {
        type: ApplicationError.type.APP_NAME,
        code: 'EMAIL_ALREADY_TAKEN',
        message: 'The given email address is already taken :(',
        statusCode: 400
    },
    AUTH_WEAK_PASSWORD: {
        type: ApplicationError.type.APP_NAME,
        code: 'AUTH_WEAK_PASSWORD',
        message: 'The given password is easy to guess, provide strong password',
        statusCode: 400
    },
    BAD_REQUEST: {
        type: ApplicationError.type.NETWORK,
        code: "BAD_REQUEST",
        message: "Bad request",
        statusCode: 400,
    },
    UNAUTHORIZED: {
        type: ApplicationError.type.NETWORK,
        code: "UNAUTHORIZED",
        message: "Unauthorized",
        statusCode: 401,
    },
    FORBIDDEN: {
        type: ApplicationError.type.NETWORK,
        code: "FORBIDDEN",
        message: "Forbidden",
        statusCode: 403,
    },
    RESOURCE_NOT_FOUND: {
        type: ApplicationError.type.NETWORK,
        code: "RESOURCE_NOT_FOUND",
        message: "Resource not found",
        statusCode: 404,
        meta: {
            translationKey: "app.common.error.RESOURCE_NOT_FOUND",
        },
    },
    INTERNAL_SERVER_ERROR: {
        type: ApplicationError.type.NETWORK,
        code: "INTERNAL_SERVER_ERROR",
        message: "Something went wrong, Please try again later.",
        statusCode: 500,
        meta: {
            shouldRedirect: true,
        },
    },
    BAD_GATEWAY: {
        type: ApplicationError.type.NETWORK,
        code: "BAD_GATEWAY",
        message: "Bad gateway",
        statusCode: 502,
    },
    SERVICE_UNAVAILABLE: {
        type: ApplicationError.type.NETWORK,
        code: "SERVICE_UNAVAILABLE",
        message: "Service unavailable",
        statusCode: 503,
    },
    GATEWAY_TIMEOUT: {
        type: ApplicationError.type.NETWORK,
        code: "GATEWAY_TIMEOUT",
        message: "Gateway timeout",
        statusCode: 504,
    },
    UNKNOWN_ERROR: {
        type: ApplicationError.type.UNKNOWN,
        code: "UNKNOWN_ERROR",
        message: "unknown error",
        statusCode: 500,
    },
}