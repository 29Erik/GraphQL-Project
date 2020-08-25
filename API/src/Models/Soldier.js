import {Schema, model} from 'mongoose';

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
        type: Enumerator,
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

export default model('Soldier', soldierSchema);
