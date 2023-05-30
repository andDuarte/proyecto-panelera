import { Schema, model } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    store: { type: Schema.Types.ObjectId, ref: 'store' },
    mark: { type: Schema.Types.ObjectId, ref: 'mark' },
    category: [{
        ref: 'Category',
        type: Schema.Types.ObjectId
    }],
    state: { type: Number, default: 1 },
});

export default model('Inventory', inventorySchema);