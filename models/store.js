import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    name: {type: String, require: true},
    farm: {type: String},
    // farm: {type: mongoose.Schema.Types.ObjectId, ref: ''},
    size: {type: String},
});

const storeModel = mongoose.model('store', storeSchema);

export{ storeModel }