import { Schema, model } from 'mongoose';

const transformationSchema = new Schema({
    amountOfCaneCut: { type: Schema.Types.ObjectId, ref: 'Inventory' },
    quantityOfPanelaElaborated: {
        type: Number, default: 0
    },
    // moldOfPanela: {type: Schema.Types.ObjectId, ref: ''},
}, {
    timestamps: true,
    versionKey: false
});

export default model('Transformation', transformationSchema );