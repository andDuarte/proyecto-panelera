import { phaseModel } from '../models/phase.js';

const phaseHttp = {
    phaseGet: async(req, res) => {
        const phase = await phaseModel.find();

        return res.json({etapas: phase});
    },

    phasePost: async(req, res) => {
        const { name, process } = req.body;

        const phase = new phaseModel({name: name, process: process});

        await phase.save();

        return res.json({msj: 'etapa creada'});
    },

    phasePut: async(req, res) => {
        const { id } = req.params;
        const { name, process } = req.body;

        const phase = await phaseModel.findByIdAndUpdate(id, {name: name, process: process});

        await phase.save();

        return res.json({msj: 'etapa actualizada'});
    },

    phaseProcess: async(req, res) => {
        const { id } = req.params;

        const { process } = req.body;

        const phaseId = await phaseModel.find({_id: id});

        const processOld = phaseId[0].process;

        for(let position = 0; position < process.length; position++) {
            processOld.push(process[position]);
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        await phase.save();

        return res.json({msj: 'actividad creada en procesos'});
    },

    phaseActivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 1});

        await phase.save();

        return res.json({msj: 'etapa activada'});
    },

    phaseDesactivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 0});

        await phase.save()

        return res.json({msj: 'etapa desactivada'});
    },

    phaseActivity: async(req, res) => {
        const { id } = req.params;

        const { idActivity } = req.params;

        const { stateActivity } = req.body;

        const phaseId = await phaseModel.find({_id: id});

        const processOld = phaseId[0].process;

        let foundActivity = false

        for(let position = 0; position < processOld.length; position++) {
            if(processOld[position]._id == idActivity) {
                processOld[position].stateActivity = stateActivity;
                foundActivity = true;
            }
        }

        if(foundActivity == false) {
            return res.json({msj: 'params id actividad no existe en la base de datos'});
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        await phase.save();
        
        return res.json({msj: 'actividad actualizada de procesos'});
    },
}

export{
    phaseHttp
}