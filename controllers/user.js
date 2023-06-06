import User from '../models/user.js';
import Role from '../models/Role.js'
// import { createToken } from '../middlewares/validate-jwt.js';
// import { isValidObjectId } from 'mongoose';

// bcryptjs
// import bcryptjs from 'bcryptjs';
// const salt = bcryptjs.genSaltSync(10);

const userHttp = {
    userGet: async (req, res) => {
        const user = await User.find().select('-password').populate('roles');

        if (user.length == 0) {
            return res.status(404).json({ msg: "No records found", msj: 'No se encontraron registros' });
        }

        return res.json(user);

    },

    // userPost: async(req, res) => {
    //     const{ name, email, password, typeUser } = req.body;

    //     // bcryptjs
    //     const hash = bcryptjs.hashSync(password, salt);

    //     // bcryptjs.getSalt(10, function(err, salt){
    //     //     bcryptjs.hash(password, salt, function(err, hash){
    //     //         password = hash;
    //     //     });
    //     // });

    //     const user = new User({name: name, email: email, password: hash, typeUser: typeUser});

    //     await user.save();

    //     return res.status(200).json({msg:'usuario creado'});
    // },

    updateUserById: async (req, res) => {
        const { name, email, roles } = req.body

        let editUser = {
            name,
            email,
            // password: await User.encryptPassword(password),
        }

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } })
            editUser.roles = foundRoles.map(role => role._id);
            
        } else {
            // Si no se especifica el rol por defecto es "user"
            const role = await Role.findOne({ name: "user" })
            editUser.roles = [role._id];
        }

        const userEdited = await User.findByIdAndUpdate(req.params.id, editUser);

        if (userEdited) {
            return res.status(201).json({ msg: "User updated", msj: 'Usuario actualizado correctamente' });
        }
        return res.status(200).json({ msg: "User not update", msj: 'usuario no actualizado ' });
    },

    updateUserActivate: async (req, res) => {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { state: 1 });

        return res.status(201).json({ msg: 'usuario activado' });
    },

    updateUserDesactivate: async (req, res) => {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { state: 0 });

        if (updatedUser) {
            return res.status(201).json({ msg: "User updated and inactived", msj: 'Usuario desactivado' });
        } else {
            return res.status(404).json({ msg: "User not update", msj: 'Usuario no actualizado' });
        }

    },

    // userLogin: async (req, res) => {
    //     const { email, password } = req.body;

    //     const user = await User.find({ email: email });

    //     if (!user) {
    //         return res.status(404).json({ errors: 'email no existe' });
    //     }

        // bcryptjs.compare(password, user.password, function(err, response){
        //     if(response == true) {
        //         const token = createToken({
        //             email: email,
        //             password: password
        //         });

        //         return res.json({jwt: token});
        //     }

        //     return res.json({msj: 'password invalida'});
        // });

    //     const validatePassword = bcryptjs.compareSync(password, user[0].password);

    //     if (validatePassword == true) {
    //         const { token } = await createToken({
    //             _id: user[0]._id,
    //             typeUser: user[0].typeUser,
    //         });

    //         return res.json({ token: token });
    //     }

    //     return res.status(404).json({ errors: 'contraseña incorrecta' });
    // },
    deleteUserById: async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: 'Usuario eliminado' });
    }
}


export {
    userHttp
}