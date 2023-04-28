import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    identification: {type: String, require: true}, 
    email: {type: String, require: true},
    password: {type: String, require: true},
    typeUser: {type: String, default:"usuario"},
    eps: {type:String, require:true},
    state: {type:Number, default: 0}
});


const userModel = mongoose.model('user', userSchema);

export {
    userModel
}