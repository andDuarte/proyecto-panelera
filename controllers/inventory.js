import Inventory from '../models/inventory.js';

import Category from '../models/category.js';

const inventoryHttp = {
    inventoryGet: async(req, res) => {
        const inventory = await Inventory.find().populate('store').populate('mark');

        // if(inventory.length == 0) {
        //     return res.status(400).json({msg: 'no existe inventario'});
        // }

        return res.status(200).json(inventory);
    },

    inventoryPost: async(req, res) => {
        const { name, category, quantity, store, mark } = req.body;

        const categoryLast = []

        for(let position = 0; position < category.length; position++) {
            const categoryTemp = await Category.findOne({name: category[position].name});
            
            console.log(categoryTemp);

            if(categoryTemp) {
                categoryLast.push({name: categoryTemp.name});
            }
        }

        console.log(categoryLast);

        const inventory = new Inventory({name: name, category: categoryLast, quantity: quantity, store: store, mark: mark});

        await inventory.save();

        return res.status(200).json({msg: 'elemento creado en inventario'});
    },

    inventoryPut: async(req, res) => {
        const { name, category, quantity, store, mark } = req.body;

        const categoryLast = []

        for(let position = 0; position < category.length; position++) {
            const categoryTemp = await Category.findOne({name: category[position].name});
            
            console.log(categoryTemp);

            if(categoryTemp) {
                categoryLast.push({name: categoryTemp.name});
            }
        }

        console.log(categoryLast);

        const inventory = await Inventory.findByIdAndUpdate(req.params.id, {name: name, category: categoryLast, quantity: quantity, store: store, mark: mark});
        

        return res.status(201).json({msg: 'elemento actualizado en inventario'});
    },

    inventoryActivate: async(req, res) => {
        const inventory = await Inventory.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'elemento activado en inventario'});
    },

    inventoryDesactivate: async(req, res) => {
        const store = await Inventory.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'elemento desactivado en inventario'});
    },
}

export{
    inventoryHttp
}