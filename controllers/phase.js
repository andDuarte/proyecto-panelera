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

        const { process } = req.body;

        const phaseId = await phaseModel.find({_id: id});

        const processOld = phaseId[0].process;

        for(let position = 0; position < process.length; position++) {
            processOld.push(process[position]);
        }

        const phase = await phaseModel.findByIdAndUpdate(id, {process: processOld});

        await phase.save();

        return res.json({msj: 'etapa actualizada'});
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
}

export{
    phaseHttp
}