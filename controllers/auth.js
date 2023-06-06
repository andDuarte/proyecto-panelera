import User from '../models/user.js';
import Role from '../models/Role.js';
import { createToken } from '../middlewares/validate-jwt.js';

const authHttp = {
    singUp: async (req, res) => {
        const { email, password, roles } = req.body;

        const newUser = new User({
            // name,
            email,
            password: await User.encryptPassword(password),
        });

        if (roles) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            newUser.roles = foundRoles.map(role => role._id);
            if (newUser.roles.length == 0) {
                // Si no se especifica el rol por defecto es "user"
                const role = await Role.findOne({ name: "user" });
                editUser.roles = [role._id];
            }
        } else {
            // Si no se especifica el rol por defecto es "user"
            const role = await Role.findOne({ name: "user" });
            newUser.roles = [role._id];
        }

        const savedUser = await newUser.save();
        // console.log(savedUser)
        // console.log(newUser)
        return res.status(201).json({ msg: "singup", msj: "usuario creado correctamente" });
    },

    singIn: async (req, res) => {
        if (req.body.email && req.body.password) {
            // console.log(req.body);

            const userFound = await User.findOne({ email: req.body.email.trim() }).populate("roles");

            if (!userFound) return res.status(404).json({ token: null, msg: "User Not Found" });
            
            const matchPassword = await User.comparePassword(req.body.password, userFound.password);

            if (!matchPassword) return res.status(401).json({ token: null, msg: "Invalid Password" });

            if (!userFound.state) return res.status(401).json({ token: null, msg: "User Inactived" });

            const { token } = await createToken({
                id: userFound._id
            });
            // console.log(userFound);

            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ msg: "Unauthorized" });
        }

    },
}

export {
    authHttp
}