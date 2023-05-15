import { Schema, model } from 'mongoose';

const peopleSchema = new Schema({
    name: { type: String, required: true },
    numberIdentification: { type: String, required: true },
    numberPhone: { type: String, required: true },
    birthDate: { type: Date },
    residenceAddress: { type: String },
    state: { type: Number, default: 1 },
    medicalInsuranceCompany: { type: String },
    typeIdentification: { type: String },
}, {
    timestamps: true,
    versionKey: false
});

export default model('People', peopleSchema);