import { storeModel } from '../models/store.js';

const storeHttp = {
    storeGet: async(req, res) => {
        const store = await storeModel.find();

        return res.json({bodegas: store});
    },
    
    storeGetQuery: async(req, res) => {
        const { name } = req.query;

        const store = await storeModel.find({name: new RegExp(name, 'i')});

        return res.json({bodega: store});
    },
    
    storePost: async(req, res) => {
        const { name, farm, size } = req.body;

        const store = new storeModel({name: name, farm: farm, size: size});

        await store.save();

        return res.json({msj: 'bodega creada'});
    },

    storePut: async(req, res) => {
        const { id } = req.params;
        const { name, farm, size } = req.body;

        const store = await storeModel.findByIdAndUpdate(id, {name: name, farm: farm, size: size});

        await store.save();

        return res.json({msj: 'bodega actualizada'});
    },

    storeActivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 1});

        await store.save();

        return res.json({msj: 'bodega activada'});
    },

    storeDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 0});

        await store.save();

        return res.json({msj: 'bodega desactivada'});
    },
}

export{
    storeHttp
}