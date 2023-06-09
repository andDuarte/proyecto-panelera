import Allotment from '../models/allotment.js';

const allotmentHttp = {
    allotmentGet: async (req, res) => {
        const allotment = await Allotment.find().populate('farm').populate('historic.farm');

        // if(allotment.length == 0) {
        //     return res.status(400).json({msg: 'no existen lotes'});
        // }

        return res.status(200).json(allotment);
    },

    createAllotment: async (req, res) =>{
        const allotment = new Allotment(req.body);

        await allotment.save();

        return res.status(200).json({msg: 'lote creado'});
    },

    allotmentPut: async(req, res) => {
        const { size, name, farm } = req.body;

        const allotmentId = await Allotment.findOne({_id: req.params.id});

        const historic = allotmentId.historic;

        historic.push({name: allotmentId.name, size: allotmentId.size, farm: allotmentId.farm});

        const allotment = await Allotment.findByIdAndUpdate(req.params.id, {size: size, name: name, farm: farm, historic: historic});

        return res.status(201).json({msg: 'lote actualizado'});
    },

    allotmentActivate: async(req, res) => {
        const allotment = await Allotment.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'lote activado'});
    },

    allotmentDesactivate: async(req, res) => {
        const allotment = await Allotment.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'lote desactivado'});
    },
    
}

export{
    allotmentHttp
}