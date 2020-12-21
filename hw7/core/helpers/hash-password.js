const bcrypt = require('bcrypt');

module.exports = (password, password1) => bcrypt.hash(password, 10);
