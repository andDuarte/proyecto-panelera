import Inventory from '../models/inventory.js';

import Category from '../models/category.js';

const inventoryHttp = {
    inventoryGet: async(req, res) => {
        const inventory = await Inventory.find().populate('store').populate('mark');

        if(inventory.length == 0) {
            return res.status(400).json({msg: 'no existe inventario'});
        }

        return res.status(200).json(inventory);
    },

    inventoryGetQuery: async(req, res) => {
        const { category } = req.query;

        const inventory = await Inventory.find({category: new RegExp(category, 'i')});

        if(inventory.length == 0) {
            return res.status(400).json({msg: 'no existe categoria en el inventario'});
        }

        return res.status(200).json({inventario: inventory});
    },

    inventoryPost: async(req, res) => {
        const { name, category, quantity, store, mark } = req.body;

        const categoryLast = []

        for(let position = 0; position < category.length; position++) {
            const categoryTemp = await Category.find({name: category[position].name});
            
            console.log(categoryTemp);

            if(categoryTemp.length > 0) {
                categoryLast.push({name: categoryTemp[0]._id});
            }
        }

        console.log(categoryLast);

        const inventory = new Inventory({name: name, category: categoryLast, quantity: quantity, store: store, mark: mark});

        await inventory.save();

        return res.status(200).json({msg: 'elemento creado en inventario'});
    },

    inventoryPut: async(req, res) => {
        const { id } = req.params;

        const { name, category, quantity, store, mark } = req.body;

        const categoryTemp = await Inventory.find({_id: id});

        let categoryLast = categoryTemp[0].category;

        let foundCategory = false;

        for(let position = 0; position < category.length; position++) {
            let temp = await Category.find({name: category[position].name});

            if(temp.length > 0) {
                for(let index = 0; index < categoryLast.length; index++) {
                    if (categoryLast[index].name == temp[0]._id) {
                        foundCategory = true;
                    }
                }

                if(foundCategory == false) {
                    categoryLast.push({name: temp[0]._id});
                }
            }

            foundCategory = false;
        }

        // console.log(categoryLast);

        const inventory = await Inventory.findByIdAndUpdate(id, {name: name, category: categoryLast, quantity: quantity, store: store, mark: mark});
        
        // await inventory.save();

        return res.status(201).json({msg: 'elemento actualizado en inventario'});
    },

    inventoryActivate: async(req, res) => {
        const { id } = req.params;

        const inventory = await Inventory.findByIdAndUpdate(id, {state: 1});

        // await inventory.save();

        return res.status(201).json({msg: 'elemento activado en inventario'});
    },

    inventoryDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await Inventory.findByIdAndUpdate(id, {state: 0});

        // await store.save();

        return res.status(201).json({msg: 'elemento desactivado en inventario'});
    },
}

export{
    inventoryHttp
}