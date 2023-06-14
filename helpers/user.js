import User from '../models/user.js';

const userValidate = {
    userId: async(id) => {
        const user = await User.find({_id: id});

        if(user.length == 0) {
            throw new Error('id no existe');
        }
    },

    userEmail: async(email) => {
        const user = await User.find({email: email});

        if(user.length != 0){
            throw new Error('email ya existe');
        }
    },

    userState: async(email) => {
        const user = await User.find({email: email});

        if(user[0].state == 0) {
            throw new Error('usuario desactivado del sistema');
        }
    },
}

export{
    userValidate
}