const bcrypt = require('bcrypt');

module.exports = (hashedPass , password) => {
    return bcrypt.compare(password , hashedPass);
}
