import {Schema, model} from 'mongoose';

const typePaySchema = new Schema({
    name: {type: String, required: true},
    description:{type: String, required: true},
    amount:{type: Number, required: true},
    // payCategory: [{
    //     ref: 'PayCategory',
    //     type: Schema.Types.ObjectId,
    // }],
});

export default model('TypePay', typePaySchema );