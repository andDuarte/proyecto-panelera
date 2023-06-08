import mongoose from 'mongoose';

const markSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ownerCompany: {type: String, required: true},
    state: {type: Number, default: 1},
    createdAt: {type: Date, default: Date.now},
});

const markModel = mongoose.model('Mark', markSchema );

export{
    markModel
}