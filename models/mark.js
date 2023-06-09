import { Schema, model } from 'mongoose';

const markSchema = new Schema({
    name: { type: String, required: true },
    ownerCompany: {type: String, required: true},
    state: {type: Number, default: 1},
    createdAt: {type: Date, default: Date.now},
});

export default model( 'Mark', markSchema );