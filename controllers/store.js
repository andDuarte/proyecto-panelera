import { storeModel } from '../models/store.js';

const storeHttp = {
    storeGet: async(req, res) => {
        const store = await storeModel.find();

        if(store.length == 0) {
            return res.json({msg: 'no existen bodegas en la base de datos'});
        }

        return res.json({bodegas: store});
    },
    
    storeGetQuery: async(req, res) => {
        const { name } = req.query;

        const store = await storeModel.find({name: new RegExp(name, 'i')});

        if(store.length == 0) {
            return res.json({msg: 'no existe bodega en la base de datos'});
        }

        return res.json({bodega: store});
    },
    
    storePost: async(req, res) => {
        const { name, farm, size } = req.body;

        const store = new storeModel({name: name, farm: farm, size: size});

        await store.save();

        return res.json({msg: 'bodega creada'});
    },

    storePut: async(req, res) => {
        const { id } = req.params;
        const { name, farm, size } = req.body;

        const store = await storeModel.findByIdAndUpdate(id, {name: name, farm: farm, size: size});

        await store.save();

        return res.json({msg: 'bodega actualizada'});
    },

    storeActivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 1});

        await store.save();

        return res.json({msg: 'bodega activada'});
    },

    storeDesactivate: async(req, res) => {
        const { id } = req.params;

        const store = await storeModel.findByIdAndUpdate(id, {state: 0});

        await store.save();

        return res.json({msg: 'bodega desactivada'});
    },
}

export{
    storeHttp
}