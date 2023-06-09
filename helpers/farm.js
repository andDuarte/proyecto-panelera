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
        const owner = await People.find({_id: ownerFarm});

        if(owner.typePeople != "owner"){
            throw new Error('tipo de persona no valido');
        }
    },
    
}


export{
    farmValidate
}