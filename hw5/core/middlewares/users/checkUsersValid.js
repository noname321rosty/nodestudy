const valid = require('joi');
const {userValid} = require('../../validator');

const statusError = require('../../errors/statusErrors');
const {statusCode} = require('../../configs');
const {errorhandler} = require('../../errors');


module.exports = (req, res, next) => {
    const user = req.body;

    const {error} = valid.validate(user, userValid.userValid);

    if (error) {
        return next(new errorhandler(
            statusError.BAD_REQUEST.message,
            statusError.USER_NOT_FOUND.message,
            statusCode.BAD_REQUEST
        ));
    };

    next();
}
