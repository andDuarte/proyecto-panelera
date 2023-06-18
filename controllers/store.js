import Store from '../models/store.js';

const storeHttp = {
    storeGet: async(req, res) => {
        const store = await Store.find().populate('farm');

        // if(store.length == 0) {
        //     return res.status(400).json({msg: 'no existen bodegas'});
        // }

        return res.status(200).json(store);
    },
    
    storePost: async(req, res) => {
        const store = new Store(req.body);

        await store.save();

        return res.status(200).json({msg: 'bodega creada'});
    },

    storePut: async(req, res) => {
        const store = await Store.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'bodega actualizada'});
    },

    storeActivate: async(req, res) => {
        const store = await Store.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'bodega activada'});
    },

    storeDesactivate: async(req, res) => {
        const store = await Store.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'bodega desactivada'});
    },
}

export{
    storeHttp
}