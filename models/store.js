import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    farm: {type: String},
    // farm: {type: mongoose.Schema.Types.ObjectId, ref: ''},
    size: {type: String},
    state: {type: Number, default: 1},
});

const storeModel = mongoose.model('store', storeSchema );

export{
    storeModel
}