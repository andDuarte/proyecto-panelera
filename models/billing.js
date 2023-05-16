import { Schema, model } from 'mongoose';

const billingSchema = new Schema({
    name: { type: String, required: true },
    numberIdentification: { type: String, required: true },
    numberPhone: { type: String, required: true },
    birthDate: { type: Date },
    residenceAddress: { type: String },
    state: { type: Number, default: 1 },
});

export default model('Billing', billingSchema);