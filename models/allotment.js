import { Schema, model } from 'mongoose';

const allotmentSchema = new Schema({
    name: {type: String, required: true},
    owner: {type: Schema.Types.ObjectId, ref: 'People'},
    size: {type: String},
    farm: {type: Schema.Types.ObjectId, ref: 'Farm'},
    // createdAt: {type: Date, default: Date.now},
    state: {type: Number, default: 1},
    historic: [
        {
            owner: {type: String},
            size: {type: String},
        },
    ],
}, {
    timestamps: true,
    versionKey: false
});

export default model('Allotment', allotmentSchema);