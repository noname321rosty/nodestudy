const jwt = require('jsonwebtoken');
const {SECRET , SECRET_KEY} = require('../configs/config');

module.exports = () => {
    const access_token = jwt.sign({}, SECRET, {expiresIn: '2h'});
    const refresh_token = jwt.sign({}, SECRET_KEY, {expiresIn: '14d'});

    return { access_token, refresh_token };
};
