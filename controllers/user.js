import User from '../models/user.js';
import Role from '../models/Role.js';

const userHttp = {
    userGet: async (req, res) => {
        const user = await User.find().select('-password').populate('roles');

        // if (user.length == 0) {
        //     return res.status(404).json({ msg: "No records found", msj: 'No se encontraron registros' });
        // }

        return res.json(user);
    },

    updateUserById: async (req, res) => {
        const { email, roles } = req.body;

        let editUser = {
            // name,
            email,
        }

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            editUser.roles = foundRoles.map(role => role._id);            
        } else {
            // Si no se especifica el rol por defecto es "user"
            const role = await Role.findOne({ name: "user" });
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

    // deleteUserById: async (req, res) => {
    //     await User.findByIdAndDelete(req.params.id)
    //     return res.status(204).json({ msg: 'Usuario eliminado' });
    // }
}

export {
    userHttp
}