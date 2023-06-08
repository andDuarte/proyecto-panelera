import { Schema, model } from 'mongoose';

const inventorySchema = new Schema({
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    store: { type: Schema.Types.ObjectId, ref: 'Store' },
    mark: { type: Schema.Types.ObjectId, ref: 'Mark' },
    category: [{ name: String }],
    state: { type: Number, default: 1 },
});

export default model('Inventory', inventorySchema);