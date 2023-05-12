import { markModel } from '../models/mark.js';

const markValidate = {
    markId: async(id) => {
        const mark = await markModel.find({_id: id});

        if(mark.length == 0) {
            throw new Error('id no existe en la base de datos');
        }
    },
}

export{
    markValidate
}