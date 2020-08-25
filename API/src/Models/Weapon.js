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

export default model('Weapon', weaponSchema);
