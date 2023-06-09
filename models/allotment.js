import { Schema, model } from 'mongoose';

const allotmentSchema = new Schema({
    name: { type: String, required: true },
    size: { type: String },
    farm: { ref: 'Farm', type: Schema.Types.ObjectId },
    state: { type: Number, default: 1 },
    historic: [
        {
            farm: { ref: 'Farm', type: Schema.Types.ObjectId },
            size: { type: String} ,
            name: String,
        },
    ],
}, {
    timestamps: true,
    versionKey: false
});

export default model( 'Allotment', allotmentSchema );