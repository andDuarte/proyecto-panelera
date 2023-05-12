import { userModel } from '../models/users.js';
import { createToken } from '../middlewares/validate-jwt.js';

// bcryptjs
import bcryptjs from 'bcryptjs';
const salt = bcryptjs.genSaltSync(10);

const userHttp = {
    userGet: async(req, res) => {
        const user = await userModel.find();

        if(user.length == 0) {
            return res.status(404).json({errors: 'no existen usuarios'});
        }

        return res.json({usuarios: user});
        
    },

    userPost: async(req, res) => {
        const{ name, email, password, typeUser } = req.body;

        // bcryptjs
        const hash = bcryptjs.hashSync(password, salt);

        // bcryptjs.getSalt(10, function(err, salt){
        //     bcryptjs.hash(password, salt, function(err, hash){
        //         password = hash;
        //     });
        // });

        const user = new userModel({name: name, email: email, password: hash, typeUser: typeUser});
    
        await user.save();

        return res.status(200).json({msg:'usuario creado'});
    },

    userPut: async(req, res) => {
        const { id } = req.params;
        const {name, password, typeUser} = req.body;

        // bscryptjs
        const hash = bcryptjs.hashSync(password, salt);

        // bcryptjs.getSalt(10, function(err, salt){
        //     bcryptjs.hash(password, salt, function(err, hash){
        //         password = hash;
        //     });
        // });

        const user = await userModel.findByIdAndUpdate(id, {name: name, password: hash, typeUser: typeUser});

        await user.save();
        
        return res.status(201).json({msg: "usuario actualizado"});
    },

    userActivate: async(req, res) => {
        const { id } = req.params;

        const user = await userModel.findByIdAndUpdate(id, {state: 1});

        await user.save();

        return res.status(201).json({msg: 'usuario activado'});
    },

    userDeactivate: async(req, res) => {
        const { id } = req.params;

        const user = await userModel.findByIdAndUpdate(id, {state: 0});

        await user.save();

        return res.status(201).json({msg: 'usuario desactivado'});
    },

    userLogin: async(req, res) => {
        const { email, password } = req.body;

        const user = await userModel.find({email: email});

        if(!user) {
            return res.status(404).json({errors: 'email no existe en la base de datos'});
        }

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

        const validatePassword = bcryptjs.compareSync(password, user[0].password);

        if(validatePassword == true){
            const { token } = await createToken({
                _id: user[0]._id,
                typeUser: user[0].typeUser,
            });
            
            return res.json({token: token});
        }

        return res.status(404).json({errors: 'contraseña incorrecta'});
    },
}


export{
    userHttp
}