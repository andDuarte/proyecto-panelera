import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    customerName: { type: String, required: true },
    descriptionOfPanela: { type: String, required: true },
    documentNumber: { type: Number, required: true },
    documentType: { type: String, required: true },
    email: { type: String, required: true },
    // orderDate: { type: Date, default: Date.now },
    orderStatus: { type: String, default: 'proceso' }, //->proceso ->entregado ->cancelado ->realizado
    phoneNumber: { type: String, required: true },
    preferencesOfPanela: { type: String, required: true },
    quantityOfPanela: { type: Number, required: true },
    sendAddress: { type: String },
    state: { type: Number, default: 1 },
}, {
    timestamps: true,
    versionKey: false
});

// const orderModel = model('Order', orderSchema);

// export {
//     orderModel
// }
export default model('Order', orderSchema);