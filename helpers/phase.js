import Phase from '../models/phase.js';

const phaseValidate = {
    phaseId: async(id) => {
        const phase = await Phase.find({_id: id});

        if(phase.length == 0) {
            throw new Error('id no existe');
        }
    },
}

export{
    phaseValidate
}