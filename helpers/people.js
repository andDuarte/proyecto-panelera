import { peopleModel } from '../models/people.js';

const peopleValidate = {
    peopleId: async(id) => {
        const people = await peopleModel.find({_id: id});

        if(people.length == 0) {
            throw new Error('el id no existe en la base de datos');
        }
    },
    
    peopleIdentification: async(numberIdentification) => {
        const people = await peopleModel.find({numberIdentification: numberIdentification});

        if(people.length !== 0) {
            throw new Error('el numero identificacion ya existente en la base de datos');
        }
    },
}

export{
    peopleValidate
}
