import Mark from '../models/mark.js';

const markHttp = {
    markGet: async(req, res) => {
        const mark = await Mark.find();

        // if(mark.length == 0) {
        //     return res.status(400).json({msg: 'no existen marcas'});
        // }

        return res.status(200).json(mark);
    },
    
    markPost: async(req, res) => {
        const mark = new Mark(req.body);

        await mark.save();

        return res.status(200).json({msg: 'marca creada'});
    },

    markPut: async(req, res) => {
        const mark = await Mark.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'marca actualizada'});
    },

    markActivate: async(req, res) => {
        const mark = await Mark.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'marca activada'});
    },

    markDesactivate: async(req, res) => {
        const mark = await Mark.findByIdAndUpdate(req.params.id, {state: 0});
        
        return res.status(201).json({msg: 'marca desactivada'});
    },
}

export{
    markHttp
}