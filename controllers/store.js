import { storeModel } from '../models/store.js';

const storeHttp = {
    storeGet: async(req, res) => {
        const store = await storeModel.find();

        if(store.length == 0) {
            return res.status(400).json({msg: 'no existen bodegas'});
        }

        return res.status(200).json({bodegas: store});
    },
    
    storeGetQuery: async(req, res) => {
        const { name } = req.query;

        const store = await storeModel.find({name: new RegExp(name, 'i')});

        if(store.length == 0) {
            return res.status(400).json({msg: 'no existe bodega'});
        }

        return res.status(200).json({bodega: store});
    },
    
    storePost: async(req, res) => {
        const { name, farm, size } = req.body;

        const store = new storeModel({name: name, farm: farm, size: size});

        await store.save();

        return res.status(200).json({msg: 'bodega creada'});
    },

    storePut: async(req, res) => {
        const { id } = req.params;
        const { name, size } = req.body;

        const store = await storeModel.findByIdAndUpdate(id, {name: name, size: size});

        // await store.save();

        return res.status(201).json({msg: 'bodega actualizada'});
    },

    storeActivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 1});

        // await store.save();

        return res.status(201).json({msg: 'bodega activada'});
    },

    storeDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 0});

        // await store.save();

        return res.status(201).json({msg: 'bodega desactivada'});
    },
}

export{
    storeHttp
}