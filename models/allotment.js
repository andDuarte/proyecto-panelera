import { Schema, model } from 'mongoose';

const allotmentSchema = new Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    size: { type: String },
    // createdAt: {type: Date, default: Date.now},
    state: { type: Number, default: 1 },
    historic: [
        {
            owner: { type: String },
            size: { type: String },
        },
    ],
}, {
    timestamps: true,
    versionKey: false
});


// const allotmentModel = model('allotment', allotmentSchema );

// export{
//     allotmentModel
// }
export default model('Allotment', allotmentSchema);