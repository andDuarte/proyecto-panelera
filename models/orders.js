import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
    orderDate: {type: Date, default: Date.now},
    customerName: {type: String, required: true},
    documentType: {type: String, required: true},
    documentNumber: {type: Number, required: true},
    phoneNumber: {type: String, required: true},
    email: {type: String, required: true},
    descriptionOfPanela: {type: String, required: true},
    preferencesOfPanela: {type: String, required: true},
    orderStatus: {type: String, default: "proceso"}, //0=proceso 1=entregado = 2=cancelado 3=realizado
    quantityOfPanela: {type: Number, required: true},
    address: {type: String},
    state: {type: Number, default: 1},
});

const ordersModel = mongoose.model('orders', ordersSchema);

export { ordersModel }