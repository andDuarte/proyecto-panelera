// no usar
import { workModel } from '../models/work.js';

const workHttp = {
    workGet: async(req, res) => {
        const work = await workModel.find();

        if(work.length == 0) {
            return res.json({msg: 'no existen labores'});
        }

        return res.json({labores: work});
    },

    workPost: async(req, res) => {
        const { name, process } = req.body;

        const work = new workModel({name: name, process: process});

        await work.save();

        return res.json({msg: 'labor creada'});
    },

    workPut: async(req, res) => {
        const { id } = req.params;

        const { name, process } = req.body;

        const work = await workModel.findByIdAndUpdate(id, {name: name, process: process});

        await work.save();

        return res.json({msg: 'labor actualizada'})
    },

    workActivate: async(req, res) => {
        const { id } = req.params;

        const work = await workModel.findByIdAndUpdate(id, {state: 1});

        await work.save();

        return res.json({msg: 'labor activada'});
    },

    workDesactivate: async(req, res) => {
        const { id } = req.params;

        const work = await workModel.findByIdAndUpdate(id, {state: 0});

        await work.save();

        return res.json({msg: 'labor desactivada'});
    },
}

export{
    workHttp
}