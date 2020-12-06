const valid = require('joi');
const {userValid} = require('../../validator');

module.exports = (req, res, next) => {
    try {
        const user = req.body;

        const {error} = valid.validate(user, userValid.userValid);

        if (error) {
            throw new Error('Wrong data')
        } else {
            next()
        }

    } catch (e) {
        res.status.json(e.message);
    }
}
