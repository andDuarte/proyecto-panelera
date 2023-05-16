import Inventory from '../models/inventory.js';

const inventoryHttp = {
    inventoryGet: async(req, res) => {
        const inventory = await Inventory.find();

        if(inventory.length == 0) {
            return res.json({msg: 'no existe inventario en la base de datos'});
        }

        return res.json({inventario: inventory});
    },

    inventoryGetQuery: async(req, res) => {
        const { category } = req.query;

        const inventory = await Inventory.find({category: new RegExp(category, 'i')});

        if(inventory.length == 0) {
            return res.json({msg: 'no existe categoria en el inventario'});
        }

        return res.json({inventario: inventory});
    },

    inventoryPost: async(req, res) => {
        const { name, category, quantity, store, mark } = req.body;

        const inventory = new Inventory({name: name, category: category, quantity: quantity, store: store, mark: mark});

        await inventory.save();

        return res.json({msg: 'elemento creado en inventario'});
    },

    inventoryPut: async(req, res) => {
        const { id } = req.params;
        const { name, category, quantity, store, mark } = req.body;

        const inventory = await Inventory.findByIdAndUpdate(id, {name: name, category: category, quantity: quantity, store: store, mark: mark});
        
        await inventory.save();

        return res.json({msg: 'elemento actualizado en inventario'});
    },

    inventoryActivate: async(req, res) => {
        const { id } = req.params;

        const inventory = await Inventory.findByIdAndUpdate(id, {state: 1});

        await inventory.save();

        return res.json({msg: 'elemento activado en inventario'});
    },

    inventoryDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await Inventory.findByIdAndUpdate(id, {state: 0});

        await store.save();

        return res.json({msg: 'elemento desactivado en inventario'});
    },
}

export{
    inventoryHttp
}