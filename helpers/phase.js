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
        console.log(process)

        if(process.length == 0) {
            throw new Error('process es necesario');
        }

        for(let position = 0; position < process.length; position++) {
            console.log(process[position].activity);
            if(!process[position].activity) {
                throw new Error('actividad');
            }

            // if(!process[position].stateActivity) {
            //     throw new Error('estado actividad es necesario');
            // }
        }
    },
}

export{
    phaseValidate
}