import { phaseModel } from '../models/phase.js';

// import People from '../models/people.js'

const phaseHttp = {
    phaseGet: async(req, res) => {
        const phase = await phaseModel.find().populate('process.elements');

        if(phase.length == 0) {
            return res.status(404).json({msg: 'no existen etapas'});
        }

        return res.status(200).json({etapas: phase});
    },

    phasePost: async(req, res) => {
        const { name, process } = req.body;

        const phase = new phaseModel({name: name, process: process});

        await phase.save();

        return res.status(200).json({msg: 'etapa creada'});
    },

    phasePut: async(req, res) => {
        const { id } = req.params;
        // const { name, process } = req.body;

        const phase = await phaseModel.findByIdAndUpdate(id, {name: req.body.name});

        // await phase.save();

        return res.status(201).json({msg: 'etapa actualizada'});
    },

    phaseProcess: async(req, res) => {
        const { id } = req.params;

        const { process } = req.body;

        if(process.length == 0) {
            res.status(400).json({msg: 'proceso es necesario'});
        }

        const phaseId = await phaseModel.find({_id: id});

        const processOld = phaseId[0].process;

        for(let position = 0; position < process.length; position++) {
            processOld.push(process[position]);
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        // await phase.save();

        return res.status(200).json({msg: 'actividad creada en procesos'});
    },

    phaseActivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 1});

        // await phase.save();

        return res.status(201).json({msg: 'etapa activada'});
    },

    phaseDesactivate: async(req, res) => {
        const { id } = req.params;

        const phase = await phaseModel.findByIdAndUpdate(id, {state: 0});

        // await phase.save()

        return res.status(201).json({msg: 'etapa desactivada'});
    },

    phaseActivity: async(req, res) => {
        const { id, idActivity } = req.params;

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
            return res.status(400).json({msg: 'id actividad no existe'});
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        // await phase.save();
        
        return res.status(201).json({msg: 'actividad actualizada'});
    },
}

export{
    phaseHttp
}