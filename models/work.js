import { Schema, model } from 'mongoose';

const workSchema = new Schema({
    phase: { ref: 'Phase', type: Schema.Types.ObjectId },

    activity: { type: String },
    
    stateActivity: { type: String, default: 'por hacer' }, //realizada, por hacer, en proceso
    
    workers: [
        {
            ref: 'People',
            type: Schema.Types.ObjectId,                
        },
    ],
    
    elements: [
        {
            ref: 'Inventory',
            type: Schema.Types.ObjectId,
        },
    ],

    state: { type: Number, default: 1 }
    
});

export default model( 'Work', workSchema );