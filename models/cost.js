import { Schema, model } from 'mongoose';

const costSchema = new Schema({
    phase: {type: Schema.Types.ObjectId, ref: 'phase'},
    list: [
        {
            process: String,
            typeOutlay: String,
            elements: [
                {
                    element: String,
                    worth: {type: Number, default: 0},
                },
            ],
            totalWorth: {type: Number, default: 0},
        }
    ],
    state: {type: Number, default: 1},
}, {
    timestamps: true,
    versionKey: false,
});

export default model('Cost', costSchema );