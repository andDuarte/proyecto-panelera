import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    // delete name
    // name: { type: String },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    state: { type: Number, default: 1 },
    // typeUser: { type: String, default: 'usuario' },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    // const salt = await bcryptjs.genSaltSync(10);
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
},

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

export default model('User', userSchema);