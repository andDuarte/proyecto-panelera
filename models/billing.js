import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({
    name: {type: String, required: true},
    numberIdentification: {type: String, required: true},
    numberPhone: {type: String, required: true},
    birthDate: {type: Date},
    residenceAddress: {type: String},
    state: {type: Number, default: 1},
});

const billingModel = mongoose.model('billing', billingSchema);

export { billingModel }