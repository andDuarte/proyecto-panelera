// no usar
import mongoose from 'mongoose';

const workSchema = new mongoose.Schema({
    name: {type: String},
    process: [
        {
            activity: {type: String},
            workers: [
                {type: mongoose.Schema.Types.ObjectId, ref: 'people'},
            ],
            stateActivity: {type: String, default: 'por hacer'},
        }
    ],
    state: {type: Number, default: 1},
});

const workModel = mongoose.model('work', workSchema );

export{
    workModel
}