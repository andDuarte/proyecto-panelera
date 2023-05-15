import Allotment from '../models/allotment.js';

const allotmentValidate = {
    allotmentId: async(id) => {
        const allotment = await Allotment.find({_id: id});

        if(allotment.length == 0) {
            throw new Error('id no existe en la base de datos');
        }
    },
}

export{
    allotmentValidate
}