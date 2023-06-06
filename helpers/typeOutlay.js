import TypeOutlay from '../models/typeOutlay.js';

const typeOutlayValidate = {
    typeOutlayId: async (id) => {
        const outlay = await TypeOutlay.find({_id: id});

        if(outlay.length == 0) {
            throw new Error('id no existe');
        }
    },
}

export{
    typeOutlayValidate
}