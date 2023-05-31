// no usar
import CostAdministrative from '../models/costAdministrative.js';

const costHttp = {
    costGet: async (req, res) => {
        const cost = await CostAdministrative.find();
        if (cost.length == 0) {
            return res.status(404).json({ msg: 'no existe costo en la base de datos' });
        }
        return res.json({ costo: cost });
    },

    createCost: async (req, res) => {
        const newCost = new CostAdministrative(req.body);

        await newCost.save();

        return res.status(201).json({ msg: 'costo creado' })
    },

    updateCostById: async (req, res) => {
        const updateCost = await CostAdministrative.findByIdAndUpdate(req.params.id, {
            orderStatus: req.body.orderStatus
        }, {
            new: true
        });

        return res.status(204).json({ msg: 'costo actualizado' });
    },

    updateCostActivate: async (req, res) => {
        const cost = await CostAdministrative.findByIdAndUpdate(req.params.id, { state: 1 });

        // await cost.save();

        return res.json({ msg: 'costo activado' });
    },

    updateCostDesactivate: async (req, res) => {
        const costs = await CostAdministrative.findByIdAndUpdate(req.params.id, { state: 0 });

        // await costs.save();

        return res.json({ msg: 'Costo desactivado' });
    },

    deleteCostById: async (req, res) => {
        await CostAdministrative.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: 'Costo eiminado' });
    }

    // costGetQuery: async (req, res) => {
    //     const { code } = req.query;

    //     const cost = await CostAdministrative.find({ code: new RegExp(code, 'i') });

    //     if (cost.length == 0) {
    //         return res.json({ msg: 'no existe codigo en costo' });
    //     }

    //     return res.json({ costo: cost }); 

    // },

    // costPost: async (req, res) => {
    //     const { name, code, quantity, costs, date, detail } = req.body;

    //     const cost = new cost({ name: name, code: code, quantity: quantity, costs: costs, date: date, detail: detail });

    //     await cost.save();

    //     return res.json({msg: 'elemento creado en costo'});
    // },

    // costPut: async(req, res) => {
    //     const {id} = req.params;
    //     const { name, code, quantity, costs, date, detail } = req. body;

    //     const cost = await CostAdministrative.findByIdAndUpdate(id, {name: name, code: code, quantity: quantity, costs: costs, date: date, detail: detail});

    //     await cost.save();

    //     return res.json({msg: 'elemento actualizado en costos'});
    // }
}
export{
    costHttp
}