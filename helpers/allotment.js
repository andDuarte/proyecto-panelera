import Allotment from '../models/allotment.js';

// import People from '../models/people.js';

const allotmentValidate = {
    allotmentId: async(id) => {
        const allotment = await Allotment.find({_id: id});

        if(allotment.length == 0) {
            throw new Error('id no existe en la base de datos');
        }
    },

    // allotmentOwner: async(owner) => {
    //     if(owner) {
    //         const people = await People.find({_id: id});

    //         if(people.length == 0) {
    //             throw new Error('id no valido');
    //         }
    //     }
    // }
}

export{
    allotmentValidate
}