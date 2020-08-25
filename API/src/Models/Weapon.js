import {Schema, model} from 'mongoose';

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

export const WeaponModel =  model('Weapon', weaponSchema);
