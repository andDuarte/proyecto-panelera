import { Schema, model } from 'mongoose';

const billingSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    totalWorth: { type: Number },
    state: { type: Number, default: 1 },
    // payment: {type: String} // efectivo - transferencia bancaria
}, {
    timestamps: true,
    versionKey: false
});

export default model('Billing', billingSchema);