import { Schema, model } from 'mongoose';

const workSchema = new Schema({
    phase: { type: Schema.Types.ObjectId, ref: 'Phase' },

    activities: [
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
                {
                    ref: 'Inventory',
                    type: mongoose.Schema.Types.ObjectId,
                },
            ],
        },
    ],

    state: { type: Number, default: 1 },
});

export default model( 'Work', workSchema );