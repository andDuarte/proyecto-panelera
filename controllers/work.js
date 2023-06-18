import Work from '../models/work.js';

const workHttp = {
    workGet: async (req, res) => {
        const work = await Work.find().populate('phase').populate('elements').populate('workers');

        // if(work.length == 0) {
        //     return res.status(404).json({msg: 'no existen labores'});
        // }

        return res.status(200).json(work);
    },

    workPost: async (req, res) => {
        const work = new Work(req.body);

        await work.save();

        return res.status(200).json({msg: 'labor creada'});
    },

    workPut: async (req, res) => {
        const work = await Work.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'labor actualizada'});
    },

    workActivate: async (req, res) => {
        const work = await Work.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'labor activada'});
    },

    workDesactivate: async (req, res) => {
        const work = await Work.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'labor desactivada'});
    }
}

export{
    workHttp
}