import People from '../models/people.js';

const peopleValidate = {
    peopleId: async(id) => {
        const people = await People.find({_id: id});

        if(people.length == 0) {
            throw new Error('id no existe en la base de datos');
        }
    },
    
    peopleIdentification: async(numberIdentification) => {
        const people = await People.find({numberIdentification: numberIdentification});

        if(people.length !== 0) {
            throw new Error('numero identificacion ya existe en la base de datos');
        }
    },
}

export{
    peopleValidate
}
