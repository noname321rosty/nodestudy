const {usersService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        let user = usersService.getUsers();

        if (user) {
            throw new Error('User exist in database');
        }

        next();
    } catch (e) {
        res.status.json(e.message);
    }

}






