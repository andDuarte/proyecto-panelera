import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    name: {type: String, require: true},
    identification: {type: Number, require:true }, 
    email: {type: String, require:true},
    password: {type: String, require:true},
    user_type:{type: String, default:"usuario", },
    eps:{type:String, require:true},
    state:{type:Number ,default: 0 }
});


const usersModel = mongoose.model('users', usersSchema);
export {usersModel}