import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    farm: {type: mongoose.Schema.Types.ObjectId, ref: 'Farm'},
    size: {type: String},
    state: {type: Number, default: 1},
});

const storeModel = mongoose.model('Store', storeSchema );

export{
    storeModel
}