import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    customer: {
        ref: "People",
        type: Schema.Types.ObjectId
    },

    products: [
        {
            element: {  ref: 'Inventory', type: Schema.Types.ObjectId},
            quantity: { type: Number, default: 1 },
            worth: { type: Number }
        }
    ],

    
    orderStatus: { type: String, default: 'proceso' }, //->proceso ->entregado ->cancelado ->realizado
   
    sendAddress: { type: String },
    
    state: { type: Number, default: 1 },
}, {
    timestamps: true,
    versionKey: false
});

export default model('Order', orderSchema);