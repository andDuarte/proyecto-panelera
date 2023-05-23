import CostAdministrative from '../models/costAdministrative.js';

const costAdministrativeValidate = {
    costId: async(id) => {
        const cost = await CostAdministrative.find({_id: id});

        if (cost.length == 0) {
            throw new Error('Id no existe en la base de datos'); 
        }
    },
}

export{
    costAdministrativeValidate
}