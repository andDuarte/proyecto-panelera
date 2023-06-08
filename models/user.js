import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new Schema({
    email: { type: String, unique: true, required: true /* [true, 'El email es necesario'],*/ },
    password: { type: String, required: true },
    state: { type: Number, default: 1 },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }], // - moderator - admin - user
}, {
    timestamps: true,
    versionKey: false
});

userSchema.statics.encryptPassword = async (password) => {
    // Se recomienda usar async para que no se bloque el proceso
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
},

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

export default model('User', userSchema);