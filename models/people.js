import mongoose from 'mongoose';

const peopleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    numberIdentification: {type: String, required: true},
    numberPhone: {type: String, required: true},
    birthDate: {type: Date},
    residenceAddress: {type: String},
    state: {type: Number, default: 1},
});

const peopleModel = mongoose.model('people', peopleSchema);

export{
    peopleModel
}