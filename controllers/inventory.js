import { inventoryModel } from '../models/inventory.js';

const inventoryHttp = {
    inventoryGet: async(req, res) => {
        const inventory = await inventoryModel.find();

        res.json({inventario: inventory});
    },
    inventoryGetQuery: async(req, res) => {
        const { category } = req.query;

        const inventory = await inventoryModel.find({category: new RegExp(category, 'i')});

        res.json({inventario: inventory});
    },
    inventoryPost: async(req, res) => {
        const { name, category, quantity, store } = req.body;

        const inventory = new inventoryModel({name: name, category: category, quantity: quantity, store: store});

        inventory.save();

        res.json({msj: 'elemento creado en inventario'});
    }
}

export{ inventoryHttp }