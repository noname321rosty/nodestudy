const bcrypt = require('bcrypt');

module.exports = (hashedPass , password) => bcrypt.compare(password , hashedPass);

