import CostInventory from '../models/costInventory.js';

const costInventoryHttp = {
    costGet: async (req, res) => {
        const cost = await CostInventory.find();

        if (cost.length == 0) {
            return res.status(404).json({ msg: 'no existe costos' });
        }
        return res.status(200).json({ costos: cost });
    },

    
    createCost: async (req, res) => {

        const { phase, list } = req.body;

        let listProcess = []

        let totalWorth = 0;

        for(let position = 0; position < list.length; position++) {
            for(let index = 0; index < list[position].elements.length; index++) {
                totalWorth = list[position].elements[index].worth;
            }

            listProcess.push({process: list[position].process, typeOutlay: list[position].typeOutlay, elements: list[position].elements, totalWorth: totalWorth});
            
            totalWorth = 0;
        }


        const newCost = new CostInventory({phase: phase, list: listProcess});

        await newCost.save();

        return res.status(201).json({ msg: 'costo creado' })
    },

    updateCostById: async (req, res) => {
        const updateCost = await CostInventory.findByIdAndUpdate(req.params.id, {
            orderStatus: req.body.orderStatus
        }, {
            new: true
        });

        return res.status(204).json({ msg: 'costo actualizado' });
    },

    updateCostActivate: async (req, res) => {
        const cost = await CostInventory.findByIdAndUpdate(req.params.id, { state: 1 });

        // await cost.save();

        return res.json({ msg: 'costo activado' });
    },

    updateCostDesactivate: async (req, res) => {
        const costs = await CostInventory.findByIdAndUpdate(req.params.id, { state: 0 });

        // await costs.save();

        return res.json({ msg: 'costo desactivado' });
    },

    deleteCostById: async (req, res) => {
        await CostInventory.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: 'Costo eiminado' });
    },
}

export{
    costInventoryHttp
}