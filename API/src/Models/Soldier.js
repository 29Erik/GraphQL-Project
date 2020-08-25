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

export const SoldierModel = model('Soldier', soldierSchema);
