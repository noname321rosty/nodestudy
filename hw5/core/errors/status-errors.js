const {USER_NOT_FOUND, BAD_REQUEST} = require("../config/statuses.enum");

module.exports = {
    USER_NOT_FOUND: {
        message: USER_NOT_FOUND,
        code: 4001
    },

    BAD_REQUEST: {
        message: BAD_REQUEST,
        code: 4011
    }
}
