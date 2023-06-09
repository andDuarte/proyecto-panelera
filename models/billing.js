import { Schema, model } from 'mongoose';

const billingSchema = new Schema({
    order: { ref: 'Order', type: Schema.Types.ObjectId },
    totalWorth: { type: Number },
    state: { type: Number, default: 1 },
    payment: {type: String} // efectivo - transferencia bancaria
}, {
    timestamps: true,
    versionKey: false
});

export default model('Billing', billingSchema);