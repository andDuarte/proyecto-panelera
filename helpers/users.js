import { userModel } from '../models/users.js';

const userValidate = {
    userId: async(id) => {
        const user = await userModel.find({_id: id});

        if(user.length == 0) {
            throw new Error('el id no existe en la base de datos');
        }
    },

    userEmail: async(email) => {
        const user = await userModel.find({email: email});

        if(user.length != 0){
            throw new Error('el email ya existe en la base de datos');
        }
    },

    userState: async(email) => {
        const user = await userModel.find({email: email});

        if(user[0].state == 0) {
            throw new Error('usuario desactivado del sistema');
        }
    },
}

export{
    userValidate
}