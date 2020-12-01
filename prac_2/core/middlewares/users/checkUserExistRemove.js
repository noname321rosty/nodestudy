const {usersService} = require('../../services');

module.exports = (req, res, next) => {
    try {
        const {id} = req.params;

        const user = usersService.getUserById(id)

        if (!user) {
            throw new Error('User is not exist');
        }

        next();
    } catch (e) {
        res.json(e.message);
    }

}



