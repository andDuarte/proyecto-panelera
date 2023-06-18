import Transformation from '../models/transformation.js';

const transformationHttp  = {
    transformationGet: async (req, res) => {
        const transformation = await Transformation.find();

        res.status(200).json(transformation);
    },

    transformationPost: async (req, res) => {
        const transformation = new Transformation(req.body);

        await transformation.save();

        return res.status(200).json({msg: 'producto creado'});
    },

    transformationPut: async (req, res) => {
        const transformation = await Transformation.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'producto actualizado'});
    },

    transformationActivate: async (req, res) => {
        const transformation = await Transformation.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'producto activado'});
    },

    transformationDesactivate: async (req, res) => {
        const transformation = await Transformation.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'producto desactivado'});
    },
}

export{
    transformationHttp
}