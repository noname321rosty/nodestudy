const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({},'KEY', {expiresIn: '3h'});
    const refresh_token = jwt.sign({},'KEY_ULTRA', {expiresIn: '30d'});

    return {
        access_token,
        refresh_token
    }
};
