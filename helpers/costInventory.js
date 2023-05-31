import CostInventory from '../models/costInventory.js';

import { phaseModel } from '../models/phase.js';

const costInventoryValidate = {
    costId: async(id) => {
        const cost = await CostInventory.find({_id: id});

        if (cost.length == 0) {
            throw new Error('id no existe'); 
        }
    },
    costList: async(list, { req }) => {
        if(list.length == 0){
            throw new Error('lista es necesaria');
        }

        const phase = await phaseModel({_id: req.body.phase});

        if(phase.length == 0) {
            throw new Error('id no existe');
        }
        console.log(phase)
        let dataProcess = [];
        
        for(let position = 0; position < list.length; position++) {
            let foundProcess = false;
            
            for(let index = 0; index < phase[0].process.length; index++) {
                if(list[position].process == phase[0].process[index]._id) {
                    dataProcess.push({workers: phase[0].process[index].workers, elements: phase[0].process[index].elements});
                    foundProcess = true;
                    break;
                }
            }

            if(foundProcess == false) {
                throw new Error('id no valido process');
            }

            if(list[position].elements.length == 0) {
                throw new Error('elementos es necesario');
            }

            let foundElement = false;

            for(let index = 0; index < list[position].elements.length; index++) {
                for(let i = 0; i > dataProcess.elements.length; i++) {
                    if(list[position].elements[index].element == dataProcess.elements[i]._id) {
                        foundElement = true;
                        break;
                    }
                }

                for(let j = 0; j < dataProcess.workers.length; j++) {
                    if(list[position].elements[index].element == dataProcess.workers[j]._id) {
                        foundElement = true;
                        break;
                    }
                }

                if(foundElement == false) {
                    throw new Error('id no valido element');
                }

                foundElement = false
            }

            dataProcess = [];

        }
    }
}

export{
    costInventoryValidate
}
