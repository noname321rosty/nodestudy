const valid = require('joi');
const {userValid} = require('../../validator');

const statusError = require('../../errors/statusErrors');
const {statusCode} = require('../../configs');
const {errorhandler , statusErrors: {USER_NOT_FOUND}} = require('../../errors');


module.exports = (req, res, next) => {
    const user = req.body;

    if (!user.name) {
        throw new errorhandler(
            USER_NOT_FOUND.message,
            USER_NOT_FOUND.code
        );
    };

    next();
}
