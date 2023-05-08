import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    descriptionOfPanela: { type: String, required: true },
    documentNumber: { type: Number, required: true },
    documentType: { type: String, required: true },
    email: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    orderStatus: { type: String, default: 'proceso' }, //0=proceso 1=entregado 2=cancelado 3=realizado
    phoneNumber: { type: String, required: true },
    preferencesOfPanela: { type: String, required: true },
    quantityOfPanela: { type: Number, required: true },
    sendAddress: { type: String },
    state: { type: Number, default: 1 },
});

const ordersModel = mongoose.model('order', ordersSchema);

export {
    ordersModel
}