const valid = require('joi');

const {email, password}  = require('../../statuses/regex.enum');

module.exports = valid.object().keys({
    email: valid.string().regex(email).trim().required(),
    password: valid.string().regex(password).trim().required()
})
