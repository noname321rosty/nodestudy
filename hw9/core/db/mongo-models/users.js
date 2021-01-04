const { Schema, model } = require('mongoose');

const tokensSchema = {
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    }
};

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 15
    },
    tokens: [tokensSchema],
    comment: {
        type: Schema.Types.Mixed
    }
});

module.exports = model('users', UsersSchema);
