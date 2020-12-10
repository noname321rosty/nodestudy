const bcrypt = require("bcrypt");

module.exports = (hashedPassword, password) => {
    return bcrypt.compare(password, hashedPassword)
}
