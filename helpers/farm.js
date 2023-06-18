import Farm from '../models/farm.js';
import People from '../models/people.js';

const farmValidate = {
    farmId: async(id) => {
        const farm = await Farm.find({_id: id});

        if(farm.length == 0) {
            throw new Error('id no valido');
        }
    },

    farmOwner: async(ownerFarm) => {
        const owner = await People.findOne({_id: ownerFarm});

        let foundTypeOwner = false;

        for (let position = 0; position < owner.typePeople.length; position++) {
            if (owner.typePeople[position] == 'owner') {
                foundTypeOwner = true;
            }
        }

        if(foundTypeOwner == false){
            throw new Error('tipo de persona no valido');
        }
    },
    
}


export{
    farmValidate
}