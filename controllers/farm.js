import Farm from '../models/farm.js';

const farmHttp = {
    farmGet: async(req, res) => {
        const farm = await Farm.find();

        if(farm.length == 0) {
            return res.status(400).json({msg: 'no existe granjas'})
        }

        return res.status(200).json({granjas: farm});
    },

    farmPost: async(req, res) => {
        const farm = new Farm(req.body);

        await farm.save();

        return res.status(200).json({msg: 'granja creada'});
    },

    farmPut: async(req, res) => {
        const { name } = req.body;

        const farm = await Farm.findByIdAndUpdate(req.params.id, {name: name});

        return res.status(201).json({msg: 'granja actualizada'});
    },

    farmActivate: async(req, res) => {
        const farm = await Farm.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'granja activada'});
    },

    farmDesactivate: async(req, res) => {
        const farm = await Farm.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'granja desactivada'});
    },
}

export{
    farmHttp
}