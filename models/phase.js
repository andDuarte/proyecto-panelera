import { Schema, model } from 'mongoose';

const phaseSchema = new Schema({
    name: {type: String, required: true},
    allotment: {type: Schema.Types.ObjectId, ref: 'Allotment'},
    state: {type: Number, default: 1},
});

export default model( 'Phase', phaseSchema );