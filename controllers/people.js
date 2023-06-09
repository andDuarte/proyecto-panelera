import People from '../models/people.js';

const peopleHttp = {
    peopleGet: async(req, res) => {
        const people = await People.find();

        // if(people.length == 0) {
        //     return res.status(400).json({msg: 'no existen personas'});
        // }

        return res.status(200).json(people);
    },

    peoplePost: async(req, res) => {
        const people = new People(req.body);

        await people.save();

        return res.status(200).json({msg: 'persona creada'})
    },

    peoplePut: async(req, res) => {
        const people = await People.findByIdAndUpdate(req.params.id, req.body);

        return res.status(201).json({msg: 'persona actualizada'});
    },

    peopleActivate: async(req, res) => {
        const people = await People.findByIdAndUpdate(req.params.id, {state: 1});

        return res.status(201).json({msg: 'persona activada'});
    },

    peopleDesactivate: async(req, res) => {
        const people = await People.findByIdAndUpdate(req.params.id, {state: 0});

        return res.status(201).json({msg: 'persona desactivada'});
    },
}

export{
    peopleHttp
}