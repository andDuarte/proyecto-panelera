import { userModel } from '../models/users.js';

const userHttp = {
    userGet: async(req, res) => {
        const user = await userModel.find();

        return res.json ({users: user});
    },

    userPost: async(req, res) => {
        const{name, identification, email, password, typeUser, eps} = req.body;

        const user = new userModel({name: name, identification: identification, email: email, password: password, typeUser: typeUser, eps: eps});
    
        await user.save();

        return res.json({msj:'usuario creado'});
    },

    userPut: async(req, res) => {
        const { id } = req.params;
        const {name, password, typeUser, eps} = req.body;

        const user = await userModel.findByIdAndUpdate(id, {name: name, password: password, typeUser: typeUser, eps: eps});

        await user.save();
        
        return res.json({msj: "usuario actualizado"});
    },

    userActivate: async(req, res) => {
        const { id } = req.params;

        const user = await userModel.findByIdAndUpdate(id, {state: 1});

        await user.save();

        return res.json({msj: 'usuario activo'});
    },

    userDeactivate: async(req, res) => {
        const { id } = req.params;

        const user = await userModel.findByIdAndUpdate(id, {state: 0});

        await user.save();

        return res.json({msj: 'usuario desactivado'});
    },
}


export{
    userHttp
}