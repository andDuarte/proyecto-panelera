import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    category: {type: String},
    quantity: {type: Number, default: 1},
    store: {type: mongoose.Schema.Types.ObjectId, ref: 'store'},
    state: {type: Number, default: 1},
    mark: {type: mongoose.Schema.Types.ObjectId, ref: 'mark'}
});

const inventoryModel = mongoose.model('inventory', inventorySchema );

export{
    inventoryModel
}