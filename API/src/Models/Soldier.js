const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const soldierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    damage: {
        type: Number,
        required: true
    },
    senseArea: {
        type: Number,
        required: false
    },
    health: {
        type: Number,
        required: false
    }
});

module.exports = model('soldier', soldierSchema);
