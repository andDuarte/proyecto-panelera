import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    name: {type: String, require: true},
    category: {type: String},
    quantity: {type: Number, default: 0},
    store: {type: mongoose.Schema.Types.ObjectId, ref: 'store'},
    state: {type: Number, default: 1},
});

const inventoryModel = mongoose.model('inventory', inventorySchema );

export{ inventoryModel }