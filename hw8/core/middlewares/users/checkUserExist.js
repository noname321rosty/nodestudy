const {usersService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        const {email, name} = req.body;

        let user = usersService.getUsers(email, name);

        if (user) {
            throw new Error('User already exist');
        }

        next();
    } catch (e) {
        next(e);
    }

}



