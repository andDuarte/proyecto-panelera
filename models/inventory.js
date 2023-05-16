import { Schema, model } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    // category: { type: String },
    quantity: { type: Number, default: 1 },
    store: { type: Schema.Types.ObjectId, ref: 'store' },
    state: { type: Number, default: 1 },
    mark: { type: Schema.Types.ObjectId, ref: 'mark' },

    category: [{
        ref: 'category',
        type: Schema.Types.ObjectId
    }],
});

export default model('Inventory', inventorySchema);