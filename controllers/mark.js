import { markModel } from '../models/mark.js';

const markHttp = {
    markGet: async(req, res) => {
        const mark = await markModel.find();

        if(mark.length == 0) {
            return res.json({msg: 'no existen marcas en la base de datos'});
        }

        return res.json({marcas: mark});
    },
    
    markPost: async(req, res) => {
        const { name, ownerCompany } = req.body;

        const mark = new markModel({name: name, ownerCompany: ownerCompany});

        await mark.save();

        return res.json({msg: 'marca creada'});
    },

    markPut: async(req, res) => {
        const { id } = req.params;
        const { name, ownerCompany } = req.body;

        const mark = await markModel.findByIdAndUpdate(id, {name: name, ownerCompany: ownerCompany});

        await mark.save();

        return res.json({msg: 'marca actualizada'});
    },

    markActivate: async(req, res) => {
        const { id } = req.params;

        const mark = await markModel.findByIdAndUpdate(id, {state: 1});

        await mark.save();

        return res.json({msg: 'marca activada'});
    },

    markDesactivate: async(req, res) => {
        const { id } = req.params;

        const mark = await markModel.findByIdAndUpdate(id, {state: 0});

        await mark.save();

        return res.json({msg: 'marca desactivada'});
    },
}

export{
    markHttp
}