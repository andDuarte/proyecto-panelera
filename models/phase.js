import mongoose from 'mongoose';

const phaseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    process: [
        {
            activity: {type: String},
            stateActivity: {type: String, default: 'por hacer'},
            // workers: [
            //     {type: mongoose.Schema.Types.ObjectId, ref: 'people'},
            // ],
        },
    ],
    state: {type: Number, default: 1},
});

const phaseModel = mongoose.model('phase', phaseSchema );

export{
    phaseModel
}