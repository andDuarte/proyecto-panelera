import { phaseModel } from '../models/phase.js';

const phaseHttp = {
    phaseGet: async(req, res) => {
        const phase = await phaseModel.find();

        if(phase.length == 0) {
            return res.json({msg: 'no existen etapas en la base de datos'});
        }

        return res.json({etapas: phase});
    },

    phasePost: async(req, res) => {
        const { name, process } = req.body;

        if(!process.activity) {
            return res.json({msg: 'actividad de proseso es necesaria'});
        }

        const phase = new phaseModel({name: name, process: process});

        await phase.save();

        return res.json({msg: 'etapa creada'});
    },

    phasePut: async(req, res) => {
        const { id } = req.params;
        const { name, process } = req.body;

        const phase = await phaseModel.findByIdAndUpdate(id, {name: name, process: process});

        await phase.save();

        return res.json({msg: 'etapa actualizada'});
    },

    phaseProcess: async(req, res) => {
        const { id } = req.params;

        const { process } = req.body;

        if(!process.activity) {
            return res.json({msg: 'actividad de proceso necesaria'});
        }

        const phaseId = await phaseModel.find({_id: id});

        const processOld = phaseId[0].process;

        for(let position = 0; position < process.length; position++) {
            processOld.push(process[position]);
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        await phase.save();

        return res.json({msg: 'actividad creada en procesos'});
    },

    phaseActivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 1});

        await phase.save();

        return res.json({msg: 'etapa activada'});
    },

    phaseDesactivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 0});

        await phase.save()

        return res.json({msg: 'etapa desactivada'});
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
            return res.json({msg: 'id actividad no existe en la base de datos'});
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        await phase.save();
        
        return res.json({msg: 'actividad actualizada en procesos'});
    },
}

export{
    phaseHttp
}