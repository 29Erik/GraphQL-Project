const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;
const weaponSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    damage: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports =  model('weapon', weaponSchema);
