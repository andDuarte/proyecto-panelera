import Phase from '../models/phase.js';

const phaseHttp = {
    phaseGet: async(req, res) => {
        const phase = await Phase.find().populate('allotment');

        // if(phase.length == 0) {
        //     return res.status(404).json({msg: 'no existen etapas'});
        // }

        return res.status(200).json(phase);
    },

    phasePost: async(req, res) => {
        const phase = new Phase(req.body);

        await phase.save();

        return res.status(200).json({msg: 'etapa creada'});
    },

    phasePut: async(req, res) => {
        const phase = await Phase.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'etapa actualizada'});
    },

    phaseActivate: async(req, res) => {
        const phase = await Phase.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'etapa activada'});
    },

    phaseDesactivate: async(req, res) => {
        const phase = await Phase.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'etapa desactivada'});
    },
}

export{
    phaseHttp
}