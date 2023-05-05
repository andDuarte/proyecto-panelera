import { allotmentModel } from '../models/allotment.js';

const allotmentHttp = {
    allotmentGet: async(req, res) => {
        const allotment = await allotmentModel.find();

        return res.json({lotes: allotment});
    },

    allotmentPost: async(req, res) => {
        const { owner, size } = req.body;

        const allotment = new allotmentModel({owner: owner, size: size});

        await allotment.save();

        return res.json({msj: 'lote creado'});
    },

    allotmentPut: async(req, res) => {
        const { id } = req.params;
 
        const { size, owner } = req.body;

        const allotmentId = await allotmentModel.find({_id: id})

        const historic = allotmentId[0].historic;
        
        historic.push({owner: allotmentId[0].owner, size: allotmentId[0].size});

        const allotment = await allotmentModel.findByIdAndUpdate(id, {size: size, owner: owner, historic: historic});

        return res.json({msj: 'lote actualizado'});
    },

    allotmentActivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await allotmentModel.findByIdAndUpdate(id, {state: 1});

        await allotment.save();

        return res.json({msj: 'lote activado'});
    },

    allotmentDesactivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await allotmentModel.findByIdAndUpdate(id, {state: 0});

        await allotment.save();

        return res.json({msj: 'lote desactivado'});
    },
}

export{
    allotmentHttp
}