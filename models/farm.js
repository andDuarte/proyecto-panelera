import {Schema, model} from 'mongoose';

const farmSchema = new Schema({
    name: String,
    ownerFarm: {type: Schema.Types.ObjectId, ref: 'People'},
    state: {type: Number, default: 1},
});

export default model('Farm', farmSchema );