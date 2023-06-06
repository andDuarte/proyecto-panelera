import {Schema, model} from 'mongoose';

const typeOutlaySchema = new Schema({
    name: {type: String, required: true}, // compra inventario - pago empleado
});

export default model('TypeOutlay', typeOutlaySchema );