const MSG = {
    GENERAL_MSG: {
        INSERT_SUCCESS: " inserted successfully..",
        CREATE_SUCCESS: " created successfully..",
        UPDATE_SUCCESS: " updated successfully...",
        DELETE_SUCCESS: " deleted successfully...",
        FOUND_SUCCESS: " found successfully..",
        LOGIN_SUCCESS: " login successfully..",
        SIGNUP_SUCCESS: " signup successfully..",

        INSERT_UNSUCCESS: " inserted unsuccessfully !!",
        CREATE_UNSUCCESS: " created unsuccessfully..",
        UPDATE_UNSUCCESS: " updated unsuccessfully !!",
        DELETE_UNSUCCESS: " deleted unsuccessfully !!",
        FOUND_UNSUCCESS: " found unsuccessfully !!",
        LOGIN_UNSUCCESS: " login unsuccessfully..",
        SIGNUP_UNSUCCESS: " signup unsuccessfully..",



        NOT_FOUND: " not found !!",
        SUCCESS: "success..",
        FAILED: "failed !!",
        FALSE: false,
        TRUE: true,


        CHK_SERVER_LOG: "Please check server log for more info..",
        SERVER_ERROR: "server error..",

        INVALID_PAYLOAD: 'Please pass valid payload',
        TOKEN_EXPIRE: 'Sorry! Your token is expire, Please try again.',
        WRONG_CREDENTIALS: 'Wrong credential',
        INVALID_TOKEN: 'Invalid token, authorization denied !!',
        EMPTY_TOKEN: 'No token, authorization denied',
        DUPLICATE_EMAIL: 'Email id must be unique...',
        REFERENCE_ERROR: "This supplier cannot be deleted!!"
    },

    STATUS_CODE: {

        // Success code
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NON_AUTHORITATIVE_INFORMATION: 203,
        NO_CONTENT: 204,
        RESET_CONTENT: 205,
        IM_USED_: 226,

        // Client Error
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENT_REQUIRED: 402,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        NOT_ACCEPTABLE: 406,
        REQUEST_TIMEOUT: 408,
        CONFLICT: 409,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        EXPECTATION_FAILED: 417,
        MISDIRECTED_REQUEST: 421,
        UNPROCESSABLE_ENTITY: 422,
        LOCKED: 423,
        TOO_MANY_REQUESTS: 429,
        REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
        CONNECTION_CLOSED_WITHOUT_RESPONSE: 444,
        UNAVAILABLE_FOR_LEGAL_REASONS: 451,
        CLIENT_CLOSED_REQUEST: 499,

        // Server Error
        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        HTTP_VERSION_NOT_SUPPORTED: 505,
        INSUFFICIENT_STORAGE: 507,
        NETWORK_AUTHENTICATION_REQUIRED: 511,
        NETWORK_CONNECT_TIMEOUT_ERROR: 599,
    }
}

module.exports = MSG;