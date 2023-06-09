import {Schema, model} from 'mongoose';

const farmSchema = new Schema({
    name: String,
    ownerFarm: { ref: 'People', type: Schema.Types.ObjectId},
    state: { type: Number, default: 1 },
});

export default model('Farm', farmSchema );