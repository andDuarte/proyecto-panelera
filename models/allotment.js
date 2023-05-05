import mongoose from 'mongoose';

const allotmentSchema = new mongoose.Schema({
    owner: {type: String, required: true},
    size: {type: String},
    createdAt: {type: Date, default: Date.now},
    state: {type: Number, default: 1},
    historic: [
        {
            owner: {type: String},
            size: {type: String},
        },
    ],
});

const allotmentModel = mongoose.model('allotment', allotmentSchema );

export{
    allotmentModel
}