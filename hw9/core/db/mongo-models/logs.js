const { Schema, model } = require('mongoose');

const LogSchema = new Schema({
    action: {
        type: String,
        required: true,
    },
    student_id: {
        type: Number,
        required: true,
    },
    action_time: {
        type: Date,
        required: true
    }
});

module.exports = model('logs', LogSchema);
