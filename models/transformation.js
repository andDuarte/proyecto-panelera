import { Schema, model } from 'mongoose';

const transformationSchema = new Schema({
    amountCane: {
        cane: { ref: 'Inventory', type: Schema.Types.ObjectId },
        amount: { type: Number }
    },
    amountPanela: { type: Number },
    presentationPanela: { type: String }, //panela en bloque, panela pulverizada
}, {
    timestamps: true,
    versionKey: false
});

export default model('Transformation', transformationSchema );