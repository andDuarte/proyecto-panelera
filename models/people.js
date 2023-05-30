import { Schema, model } from 'mongoose';

const peopleSchema = new Schema({
    name: { type: String, required: true },
    numberIdentification: { type: String, required: true },
    typeDocument : { type: String }, // CC - cedula ciudadania / TI - tarjeta identidad / PA - pasaporte
    numberPhone: { type: String, required: true },
    birthDate: { type: String },
    residenceAddress: { type: String },
    state: { type: Number, default: 1 },
    medicalInsuranceCompany: { type: String },
    typePeople: String, // customer - owner - worker
}, {
    timestamps: true,
    versionKey: false,
});

export default model('People', peopleSchema);