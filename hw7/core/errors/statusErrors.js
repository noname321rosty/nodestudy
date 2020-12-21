const { USER_NOT_FOUND, BAD_REQUEST, CAR_NOT_FOUND, TOKEN_NOT_FOUND} = require('../statuses');

module.exports = {
    USER_NOT_FOUND: {
        message:  USER_NOT_FOUND,
        code:404
    },
    CAR_NOT_FOUND: {
        message:  CAR_NOT_FOUND,
        code:404
    },
    TOKEN_NOT_FOUND: {
        message:  TOKEN_NOT_FOUND,
        code:404
    },
    BAD_REQUEST:{
        message: BAD_REQUEST,
        code: 400
    }

}

