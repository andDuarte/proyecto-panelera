import Cost from '../models/cost.js';

const costValidate = {
    costId: async (id) => {
        const cost = await Cost.find({_id: id});

        if (cost.length == 0) {
            throw new Error('id no existe'); 
        }
    },
}

export{
    costValidate
}