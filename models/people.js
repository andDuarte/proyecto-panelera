import { Schema, model } from 'mongoose';

const peopleSchema = new Schema({
    name: { type: String, required: true },
    numberIdentification: { type: String, required: true },
    numberPhone: { type: String, required: true },
    birthDate: { type: String },
    residenceAddress: { type: String },
    state: { type: Number, default: 1 },
    medicalInsuranceCompany: { type: String },
    typeDocument : { type: String }, // CC - cedula ciudadania / TI - tarjeta identidad / PA - pasaporte
    typePeople: String, // customer - owner - worker
    // typeDocument: [{
    //     ref: 'typeDocument',
    //     type: Schema.Types.ObjectId
    // }],
}, {
    timestamps: true,
    versionKey: false,
});

export default model('People', peopleSchema);