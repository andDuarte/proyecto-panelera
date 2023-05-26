import { storeModel } from '../models/store.js';

const storeValidate = {
    storeId: async(id) => {
        const store = await storeModel.find({_id: id});

        if(store.length == 0) {
            throw new Error('id no existe');
        }
    },
}

export{
    storeValidate
}