import mongoose from 'mongoose';

const phaseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    process: [
        {
            activity: {type: String},
            stateActivity: {type: String, default: 'por hacer'}, //realizada, por hacer, en proceso
            workers: [
                {
                    ref: 'People',
                    type: mongoose.Schema.Types.ObjectId, 
                    
                },
            ],
            elements: [
                {type: mongoose.Schema.Types.ObjectId, ref: 'Inventory'},
            ],
            state: {type: Number, default: 1},
        },
    ],
    allotment: {type: mongoose.Schema.Types.ObjectId, ref: 'Allotment'},
    state: {type: Number, default: 1},
});

const phaseModel = mongoose.model('phase', phaseSchema );

export{
    phaseModel
}