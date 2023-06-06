import Cost from '../models/cost.js';

const costHttp = {
    costGet: async (req, res) => {
        const cost = await Cost.find();

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
                totalWorth = totalWorth + list[position].elements[index].worth;
            }

            listProcess.push({process: list[position].process, typeOutlay: list[position].typeOutlay, elements: list[position].elements, totalWorth: totalWorth});
        }


        const newCost = new Cost({phase: phase, list: listProcess});

        await newCost.save();

        return res.status(201).json({ msg: 'costo creado' });
    },

    updateCostById: async (req, res) => {
        const { list } = req.body;

        const { id } = req.params;

        let listProcess = [];

        let temp = await Cost.find({_id: id});

        // console.log(temp[0]);

        listProcess = temp[0].list;

        let totalWorth = 0;

        for(let position = 0; position < list.length; position++) {
            for(let index = 0; index < list[position].elements.length; index++) {
                totalWorth = totalWorth + list[position].elements[index].worth;
            }

            listProcess.push({process: list[position].process, typeOutlay: list[position].typeOutlay, elements: list[position].elements, totalWorth: totalWorth});
        }

        console.log(listProcess)

        const updateCost = await Cost.findByIdAndUpdate(id, {list: listProcess});

        return res.status(201).json({ msg: 'costo actualizado' });
    },

    updateCostActivate: async (req, res) => {
        const cost = await Cost.findByIdAndUpdate(req.params.id, { state: 1 });

        // await cost.save();

        return res.status(201).json({ msg: 'costo activado' });
    },

    updateCostDesactivate: async (req, res) => {
        const costs = await Cost.findByIdAndUpdate(req.params.id, { state: 0 });

        // await costs.save();

        return res.status(201).json({ msg: 'costo desactivado' });
    },

    deleteCostById: async (req, res) => {
        await Cost.findByIdAndDelete(req.params.id);
        return res.status(200).json({ msg: 'costo eiminado' });
    },
}

export{
    costHttp
}