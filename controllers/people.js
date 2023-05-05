import { peopleModel } from '../models/people.js';

const peopleHttp = {
    peopleGet: async(req, res) => {
        const people = await peopleModel.find();

        return res.json({personas: people});
    },

    peoplePost: async(req, res) => {
        const { name, numberIdentification, numberPhone, birthDate, residenceAddress } = req.body;

        const people = new peopleModel({name: name, numberIdentification: numberIdentification, numberPhone: numberPhone, birthDate: birthDate, residenceAddress: residenceAddress});

        await people.save();

        return res.json({msj: 'persona creada'})
    },

    peoplePut: async(req, res) => {
        const { id } = req.params;

        const { name, numberPhone, residenceAddress } = req.body;

        const people = await peopleModel.findByIdAndUpdate(id, {name: name, numberPhone: numberPhone, residenceAddress: residenceAddress});

        await people.save();

        return res.json({msj: 'persona actualizada'});
    },

    peopleActivate: async(req, res) => {
        const { id } = req.params;

        const people = await peopleModel.findByIdAndUpdate(id, {state: 1});

        await people.save();

        return res.json({msj: 'persona activada'});
    },

    peopleDesactivate: async(req, res) => {
        const { id } = req.params;

        const people = await peopleModel.findByIdAndUpdate(id, {state: 0});

        await people.save();

        return res.json({msj: 'persona desactivada'});
    },
}

export{
    peopleHttp
}