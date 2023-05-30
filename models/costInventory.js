import { Schema, model } from 'mongoose';

const costInventorySchema = new Schema({
    process: {type: Schema.Types.ObjectId, ref: 'phase'},
    typePay: {type: Schema.Types.ObjectId, ref: 'TypePay'},
    // totalWorth
    state: {type: Number, default: 1},
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Cost', costInventorySchema );