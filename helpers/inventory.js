import { inventoryModel } from '../models/inventory.js';

const inventoryValidate = {
    inventoryId: async(id) => {
        const store = await inventoryModel.find({_id: id});

        if(store.length == 0) {
            throw new Error('id no existe en la base de datos');
        }
    },
}

export{
    inventoryValidate
}