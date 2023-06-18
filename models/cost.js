import { Schema, model } from 'mongoose';

const costSchema = new Schema({
    process: { ref: 'Work', type: Schema.Types.ObjectId },
    list: [
        {
            element: { type: String },
            people: { type: String },
            typeOutlay: { ref: 'TypeOutlay', type: Schema.Types.ObjectId },
            worth: { type: Number },

        }
    ],
    totalWorth: {type: Number, default: 0},    
    state: {type: Number, default: 1},
}, {
    timestamps: true,
    versionKey: false,
});

export default model( 'Cost', costSchema );