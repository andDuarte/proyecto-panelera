import CostInventory from '../models/costInventory.js';
 
const costInventoryValidate = {
    costId: async(id) => {
        const cost = await CostInventory.find({_id: id});

        if (cost.length == 0) {
            throw new Error('Id no existe en la base de datos'); 
        }
    },
}

export{
    costInventoryValidate
}
