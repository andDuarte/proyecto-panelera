import { Schema, model } from 'mongoose';

const costSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    quantity: { type: Number, default: 1, required: true },
    costs: { type: String, required: true },
    date: { type: Date, required: true },
    detail: { type: String },
},{
    timestamps: true,
    versionKey: false,
});
    // cost: [{
    //     ref: 'cost',
    //     type: Schema.type.objectId
    // }],
export default model('Cost', costSchema);