import Cost from '../models/cost.js';

const costHttp = {
    costGet: async (req, res) => {
        const cost = await Cost.find().populate('process');

        // if (cost.length == 0) {
        //     return res.status(404).json({ msg: 'no existe costos' });
        // }

        return res.status(200).json(cost);
    },

    
    createCost: async (req, res) => {
        const { process, list } = req.body;

        let totalWorth = 0

        for (let position = 0; position < list.length; position++) {
            totalWorth = totalWorth + parseInt(list[position].worth);
        }

        const newCost = new Cost({process: process, list: list, totalWorth: totalWorth});

        await newCost.save();

        return res.status(201).json({ msg: 'costo creado' });
    },

    updateCostById: async (req, res) => {
        const { process, list } = req.body;

        let totalWorth = 0

        for (let position = 0; position < list.length; position++) {
            totalWorth = totalWorth + parseInt(list[position].worth);
        }

        const updateCost = await Cost.findByIdAndUpdate(req.params.id, {process: process, list: list, totalWorth: totalWorth});

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