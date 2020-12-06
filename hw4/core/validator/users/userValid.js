const valid = require('joi');

module.exports = valid.object().keys({
    id: valid.number().integer().optional(),
    name: valid.string().trim().min(2).max(15).required(),
    email: valid.string().trim().min(5).required(),
    password: valid.string().trim().min(8).required()
})
