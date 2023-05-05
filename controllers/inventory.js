import { inventoryModel } from '../models/inventory.js';

const inventoryHttp = {
    inventoryGet: async(req, res) => {
        const inventory = await inventoryModel.find();

        return res.json({inventario: inventory});
    },

    inventoryGetQuery: async(req, res) => {
        const { category } = req.query;

        const inventory = await inventoryModel.find({category: new RegExp(category, 'i')});

        return res.json({inventario: inventory});
    },

    inventoryPost: async(req, res) => {
        const { name, category, quantity, store, mark } = req.body;

        const inventory = new inventoryModel({name: name, category: category, quantity: quantity, store: store, mark: mark});

        await inventory.save();

        return res.json({msj: 'elemento creado en inventario'});
    },

    inventoryPut: async(req, res) => {
        const { id } = req.params;
        const { name, category, quantity, store, mark } = req.body;

        const inventory = await inventoryModel.findByIdAndUpdate(id, {name: name, category: category, quantity: quantity, store: store, mark: mark});
        
        await inventory.save();

        return res.json({msj: 'elemento actualizado en inventario'});
    },

    inventoryActivate: async(req, res) => {
        const { id } = req.params;

        const inventory = await inventoryModel.findByIdAndUpdate(id, {state: 1});

        await inventory.save();

        return res.json({msj: 'elemento activado en inventario'});
    },

    inventoryDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await inventoryModel.findByIdAndUpdate(id, {state: 0});

        await store.save();

        return res.json({msj: 'elemento desactivado en inventario'});
    },
}

export{
    inventoryHttp
}