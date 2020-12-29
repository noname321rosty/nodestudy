const { USER_NOT_FOUND, BAD_REQUEST, CAR_NOT_FOUND, TOKEN_NOT_FOUND, MANY_PHOTOS, NOT_PHOTO} = require('../statuses');

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
    },
    MANY_PHOTOS:{
        message: MANY_PHOTOS,
        code: 400
    },
    NOT_PHOTO:{
        message: NOT_PHOTO,
        code: 400
    }


}

