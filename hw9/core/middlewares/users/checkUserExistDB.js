const {usersService} = require('../../services');
const {errorhandler , statusErrors: {BAD_REQUEST}} = require('../../errors');

module.exports = (req, res, next) => {
    try {
        const { name } = req.body;

        const user = usersService.getUsers(name);

        if (user) {
            throw next(new errorhandler(
                BAD_REQUEST.message,
                BAD_REQUEST.code
            ));
        };

        next();
    } catch (e) {
        next(e);
    }

}



