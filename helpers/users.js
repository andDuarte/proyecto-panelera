import { userModel } from '../models/users.js';

const userValidate = {
    userId: async(id) => {
        const user = await userModel.find({_id: id})

        if(user.length == 0) {
            throw new Error('params id no existe en la base de datos');
        }
    },

    userEmail: async(email) => {
        const user = await userModel.find({email: email});

        if(user.length != 0){
            throw new Error('body email ya existe en la base de datos');
        }
    },
}

export{
    userValidate
}