import Farm from '../models/farm.js';

const farmValidate = {
    farmId: async(id) => {
        const farm = await Farm.find({_id: id});

        if(farm.length == 0) {
            throw new Error('id no valido');
        }
    },
}

export{
    farmValidate
}