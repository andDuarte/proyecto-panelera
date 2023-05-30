import { Schema, model } from 'mongoose';

const billingSchema = new Schema({
    // name: { type: String, required: true },
    order: {type: Schema.Types.ObjectId, ref: 'Order'},
    totalWorth: {type: Number},
    state: { type: Number, default: 1 },
    date
});

export default model('Billing', billingSchema);