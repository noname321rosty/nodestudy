const { USER_NOT_FOUND, BAD_REQUEST} = require('../configs');

module.exports = {
    USER_NOT_FOUND: {
        message:  USER_NOT_FOUND,
        code:404
    },
    BAD_REQUEST:{
        message: BAD_REQUEST,
        code: 400
    }

}

