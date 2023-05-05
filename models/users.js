import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true},
    password: {type: String, required: true},
    typeUser: {type: String, default: 'usuario'},
    state: {type: Number, default: 1}
});


const userModel = mongoose.model('user', userSchema );

export {
    userModel
}