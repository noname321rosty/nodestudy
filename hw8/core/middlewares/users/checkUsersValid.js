const valid = require('joi');
const {userValid} = require('../../validator');

const {errorhandler , statusErrors: {USER_NOT_FOUND}} = require('../../errors');

module.exports = (req, res, next) => {
    const user = req.body;

    const {error} = valid.validate(user, userValid.checkUsersValid);

    if (!error) {
        throw new errorhandler(
            USER_NOT_FOUND.message,
            USER_NOT_FOUND.code
        );
    };

    next();
}
