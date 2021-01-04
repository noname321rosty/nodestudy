const { Schema, model } = require('mongoose');

const LogSchema = new Schema({
    action: {
        type: String,
        required: true,
    },
    user_id: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        required: true
    }
});

module.exports = model('logs', LogSchema);
