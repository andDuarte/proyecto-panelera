import { Schema, model } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    store: { ref: 'Store', type: Schema.Types.ObjectId },
    mark: { ref: 'Mark', type: Schema.Types.ObjectId },
    category: [ { name: String } ],
    state: { type: Number, default: 1 },
});

export default model( 'Inventory', inventorySchema );