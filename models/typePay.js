import {Schema, model} from 'mongoose';

const typePaySchema = new Schema({
    name: {type: String, required: true},
});

export default model('TypePay', typePaySchema );