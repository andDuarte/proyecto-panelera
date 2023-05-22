import User from '../models/user.js'
import Role from '../models/Role.js'
import { createToken } from '../middlewares/validate-jwt.js';

const authHttp = {
    singUp: async (req, res) => {
        const { name, email, password, roles } = req.body

        const userFound = await User.findOne({ email: email });

        if (!userFound) {
            const newUser = new User({
                name,
                email,
                password: await User.encryptPassword(password),
            })

            if (roles) {
                const foundRoles = await Role.find({ name: { $in: roles } })
                newUser.roles = foundRoles.map(role => role._id);
            } else {
                // Si no se especifica el rol por defecto es "user"
                const role = await Role.findOne({ name: "user" })
                newUser.roles = [role._id];
            }

            const savedUser = await newUser.save();
            // console.log(savedUser)
            // console.log(newUser)
            return res.status(200).json({msg:"singup", msj:"El usuario ha sido creado correctamente"})
        }

        return res.status(200).json({msg:"not singup email duplicate"})
    },

    singIn: async (req, res) => {
        console.log(req.body);
        const userFound = await User.findOne({ email: req.body.email }).populate("roles");
        
        if (!userFound) return res.status(404).json({msg: "User Not Found"})

        const matchPassword = await User.comparePassword(req.body.password, userFound.password)

        if (!matchPassword) return res.status(401).json({token:null, msg:"Invalid Password"})

        const { token } = await createToken({
            id: userFound._id
        })
        console.log(userFound);

        res.json({token: token})
    },
}

export {
    authHttp
}
