const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const divisionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    positions: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    }
});

module.exports = model('division', divisionSchema);
