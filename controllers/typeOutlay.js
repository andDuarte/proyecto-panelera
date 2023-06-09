import TypeOutlay from '../models/typeOutlay.js';

const typeOutlayHttp = {
    typeOutlayGet: async (req, res) => {
        const outlay = await TypeOutlay.find();

        // if(outlay.length == 0) {
        //     return res.status(400).json({msg: 'no existen tipo gastos'});
        // }
        
        return res.status(200).json(outlay);
    },

    createTypeOutlay: async (req, res) => {
        const outlay = new TypeOutlay(req.body);

        await outlay.save();

        res.status(200).json({msg: 'tipo gasto creado'});
    },

    updateTypeOutlay: async (req, res) => {
        await TypeOutlay.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'tipo gasto actualizado'});
    },

    activateTypeOutlay: async (req, res) => {
        await TypeOutlay.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'tipo gasto activado'});
    },

    desactivateTypeOutlay: async (req, res) => {
        await TypeOutlay.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'tipo gasto desactivado'});
    },
}

export{
    typeOutlayHttp
}