// eslint-disable-next-line no-shadow
enum HTTP_STATUS_CODE {
    GET = 200,
    POST = 201,
    ACCEPTED = 202,
    PUT = 204,
    BAD_REQUEST = 400,
    NOT_AUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    SIGN_FORM_ERROR = 423,
    MEMBER_REGISTER_IN_PROGRESS_ERROR = 424,
    INTERNAL_SERVER_ERROR = 500,
    DELETE = 200,
    GATEWAY_TIMEOUT = 504,
}

export default HTTP_STATUS_CODE;
