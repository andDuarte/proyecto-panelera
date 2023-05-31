import { Schema, model } from 'mongoose';

const billingSchema = new Schema({
    // name: { type: String, required: true },
    order: { type: Schema.Types.ObjectId, ref: 'Order' },
    totalWorth: { type: Number },
    state: { type: Number, default: 1 },
    // date
}, {
    timestamps: true,
    versionKey: false
});

export default model('Billing', billingSchema);

// https://quasar.dev/vue-components/inner-loading#usage