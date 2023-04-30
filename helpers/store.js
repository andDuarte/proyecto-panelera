import { storeModel } from '../models/store.js';

const storeValidate = {
    storeId: async(id) => {
        const store = await storeModel.find({_id: id});

        if(store.length == 0) {
            throw new Error('params id no existe en la base de datos');
        }
    }
}

export{
    storeValidate
}