import { Schema, model } from 'mongoose';

const allotmentSchema = new Schema({
    name: {type: String, required: true},
    size: {type: String},
    farm: {type: Schema.Types.ObjectId, ref: 'Farm'},
    state: {type: Number, default: 1},
    historic: [
        {
            farm: {type: Schema.Types.ObjectId, ref: 'Farm'},
            size: {type: String},
            name: String,
            // owner: {type: String},
        },
    ],
    // owner: {type: Schema.Types.ObjectId, ref: 'People'},
    // createdAt: {type: Date, default: Date.now},
}, {
    timestamps: true,
    versionKey: false
});

export default model('Allotment', allotmentSchema);