const {usersService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        const { name } = req.body;

        const user = usersService.getUsers(name);

        if (user) {
            throw new Error('User not exist in database');
        }

        next();
    } catch (e) {
        res.status(201).json(e.message);
    }

}



