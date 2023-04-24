import { storeModel } from '../models/store.js';

const storeHttp = {
    storeGet: async(req, res) => {
        const store = await storeModel.find()

        res.json({bodegas: store});
    },
    storeGetQuery: async(req, res) => {
        const { name } = req.query;

        const store = await storeModel.find({ name: new RegExp(name, 'i')});

        res.json({bodega: store});
    },
    storePost: async(req, res) => {
        const { name, farm, size } = req.body;

        const store = new storeModel({name: name, farm: farm, size: size});

        await store.save()

        res.json({msj: 'bodega creada'});
    }
}

export{ storeHttp }