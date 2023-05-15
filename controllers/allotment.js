// import { Allotment } from '../models/allotment.js';
import Allotment from '../models/allotment.js';

const allotmentHttp = {
    allotmentGet: async(req, res) => {
        const allotment = await Allotment.find();

        if(allotment.length == 0) {
            return res.json({msg: 'no existen lotes en la base de datos'});
        }

        return res.json({lotes: allotment});
    },

    createAllotment: async (req, res) =>{

        const allotment = new Allotment(req.body);

        await allotment.save();

        return res.json({msg: 'lote creado'});

    },

    // allotmentPost: async(req, res) => {
    //     // const { owner, name } = req.body;
    //     console.log(req.body);

    //     // const allotment = new Allotment(req.body);

    //     // await allotment.save();

    //     return res.json({msg: 'lote creado'});
    // },

    allotmentPut: async(req, res) => {
        const { id } = req.params;
 
        const { size, name, owner } = req.body;

        const allotmentId = await Allotment.find({_id: id});

        const historic = allotmentId[0].historic;
        
        historic.push({owner: allotmentId[0].owner, size: allotmentId[0].size});

        const allotment = await Allotment.findByIdAndUpdate(id, {size: size, owner: owner,name: name, historic: historic});
 
        allotment.save()
        return res.json({msg: 'lote actualizado'});
    },

    allotmentActivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await Allotment.findByIdAndUpdate(id, {state: 1});

        await allotment.save();

        return res.json({msg: 'lote activado'});
    },

    allotmentDesactivate: async(req, res) => {
        const { id } = req.params;

        const allotment = await Allotment.findByIdAndUpdate(id, {state: 0});

        await allotment.save();

        return res.json({msg: 'lote desactivado'});
    },
    
    deleteAllotmentById: async (req, res) => {
        await Allotment.findByIdAndDelete(req.params.id)
        return res.status(204).json({ msg: 'Pedido eiminado' });
    },
}

export{
    allotmentHttp
}