import Mark from '../models/mark.js';

const markValidate = {
    markId: async(id) => {
        const mark = await Mark.find({_id: id});

        if(mark.length == 0) {
            throw new Error('id no existe');
        }
    },
}

export{
    markValidate
}