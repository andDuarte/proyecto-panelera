import { Schema, model } from 'mongoose';

const storeSchema = new Schema({
    name: { type: String, required: true },
    farm: { ref: 'Farm', type: Schema.Types.ObjectId },
    size: { type: String },
    state: { type: Number, default: 1 },
});

export default model( 'Store', storeSchema );