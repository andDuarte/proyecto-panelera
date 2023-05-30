// no usar
import { Schema, model } from 'mongoose';

const costAdministrativeSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    quantity: { type: Number, default: 1, required: true },
    costs: { type: String, required: true },
    date: { type: Date, required: true },
    detail: { type: String },
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Cost', costAdministrativeSchema );