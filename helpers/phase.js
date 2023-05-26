import People from '../models/people.js';

import Inventory from '../models/inventory.js'

import { phaseModel } from '../models/phase.js';




const phaseValidate = {
    phaseId: async(id) => {
        const phase = await phaseModel.find({_id: id});

        if(phase.length == 0) {
            throw new Error('id no existe');
        }
    },

    phaseActivity: async(activity, { req }) => {
        const { id } = req.params;

        const phase = await phaseModel.find({_id: id});

        if(phase.length == 0) {
            throw new Error('id no existe')
        }

        const process = phase[0].process;

        let existActivity = false;

        for(let position = 0; position < process.length; position++) {
            if(process[position]._id == activity) {
                existActivity = true;
            }
        }

        if(existActivity == false) {
            throw new Error('id actividad no existe en procesos');
        }
    },

    phaseProcess: async(process, { req }) => {
        // console.log(process);

        // if(process.length == 0) {
        //     throw new Error('process es necesario');
        // }

        for(let position = 0; position < process.length; position++) {
            console.log(process[position].activity);
            if(!process[position].activity) {
                throw new Error('actividad es necesaria');
            }

            if(process[position].workers) {
                if(process[position].workers.length == 0) {
                    throw new Error('trabajadores es necesario');
                }

                for(let index = 0; index < process[position].workers.length; index++) {
                    const people = await People.find({_id: process[position].workers[index]});

                    if(people.length == 0){
                        throw new Error('id no valido');
                    }
                }
            }

            if(process[position].elements) {
                if(process[position].elements.length == 0) {
                    throw new Error('elemento es necesario');
                }

                for(let index = 0; index < process[position].elements.length; index++) {
                    const element = await Inventory.find({_id: process[position].elements[index]});

                    if(element.length == 0) {
                        throw new Error('id no valido');
                    }
                }
            }
        }
    },
}

export{
    phaseValidate
}