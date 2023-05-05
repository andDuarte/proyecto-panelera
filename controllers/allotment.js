import { allotmentModel } from '../models/allotment.js';

const allotmentHttp = {
    allotmentGet: async(req, res) => {
        const allotment = await allotmentModel.find();

        if(allotment.length == 0) {
            return res.json({msg: 'no existen lotes en la base de datos'});
        }

        return res.json({lotes: allotment});
    },

    allotmentPost: async(req, res) => {
        const { owner, size } = req.body;

        const allotment = new allotmentModel({owner: owner, size: size});

        await allotment.save();

        return res.json({msg: 'lote creado'});
    },

    allotmentPut: async(req, res) => {
        const { id } = req.params;
 
        const { size, owner } = req.body;

        const allotmentId = await allotmentModel.find({_id: id});

        const historic = allotmentId[0].historic;
        
        historic.push({owner: allotmentId[0].owner, size: allotmentId[0].size});

        const allotment = await allotmentModel.findByIdAndUpdate(id, {size: size, owner: owner, historic: historic});

        return res.json({msg: 'lote actualizado'});
    },

    allotmentActivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await allotmentModel.findByIdAndUpdate(id, {state: 1});

        await allotment.save();

        return res.json({msg: 'lote activado'});
    },

    allotmentDesactivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await allotmentModel.findByIdAndUpdate(id, {state: 0});

        await allotment.save();

        return res.json({msg: 'lote desactivado'});
    },
}

export{
    allotmentHttp
}