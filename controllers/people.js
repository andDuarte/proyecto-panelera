import People from '../models/people.js';

const peopleHttp = {
    peopleGet: async(req, res) => {
        const people = await People.find();

        if(people.length == 0) {
            return res.status(400).json({msg: 'no existen personas'});
        }

        return res.status(200).json({personas: people});
    },

    peoplePost: async(req, res) => {
        // const { name, numberIdentification, numberPhone, birthDate, residenceAddress, typePeople, typeDocument, medicalInsuranceCompany } = req.body;

        const people = new People(req.body);

        await people.save();

        return res.status(200).json({msg: 'persona creada'})
    },

    peoplePut: async(req, res) => {
        const { id } = req.params;

        const { name, numberPhone, residenceAddress, typeDocument, medicalInsuranceCompany, typePeople } = req.body;

        const people = await People.findByIdAndUpdate(id, {name: name, numberPhone: numberPhone, residenceAddress: residenceAddress, typeDocument: typeDocument, medicalInsuranceCompany: medicalInsuranceCompany, typePeople: typePeople});

        // await people.save();

        return res.status(201).json({msg: 'persona actualizada'});
    },

    peopleActivate: async(req, res) => {
        const { id } = req.params;

        const people = await People.findByIdAndUpdate(id, {state: 1});

        // await people.save();

        return res.status(201).json({msg: 'persona activada'});
    },

    peopleDesactivate: async(req, res) => {
        const { id } = req.params;

        const people = await People.findByIdAndUpdate(id, {state: 0});

        // await people.save();

        return res.status(201).json({msg: 'persona desactivada'});
    },
}

export{
    peopleHttp
}