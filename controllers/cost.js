import Cost from '../models/cost.js';

const costHttp = {
    costGet: async (req, res) => {
        const cost = await Cost.find().populate('process').populate('typeOutlay');

        // if (cost.length == 0) {
        //     return res.status(404).json({ msg: 'no existe costos' });
        // }

        return res.status(200).json(cost);
    },

    
    createCost: async (req, res) => {
        const newCost = new Cost(req.body);

        await newCost.save();

        return res.status(201).json({ msg: 'costo creado' });
    },

    updateCostById: async (req, res) => {
        const updateCost = await Cost.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({ msg: 'costo actualizado' });
    },

    updateCostActivate: async (req, res) => {
        const cost = await Cost.findByIdAndUpdate(req.params.id, { state: 1 });

        return res.status(201).json({ msg: 'costo activado' });
    },

    updateCostDesactivate: async (req, res) => {
        const costs = await Cost.findByIdAndUpdate(req.params.id, { state: 0 });

        return res.status(201).json({ msg: 'costo desactivado' });
    },
}

export{
    costHttp
}