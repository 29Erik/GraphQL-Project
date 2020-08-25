import {Schema, model} from 'mongoose';

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

export const DivisionModel = model('Division', divisionSchema);
