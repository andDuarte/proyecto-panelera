import { Schema, model } from 'mongoose';

export const TYPEDCOCUMENT= [ 'CC', 'TI', 'CE', 'PS', 'DNI', 'NIT', 'PR', 'PEP', 'PPT' ]

const tyDocumentSchema = new Schema({
  typeDocument: String,
}, {
    versionKey: false,
});

export default model('TypeDocument', tyDocumentSchema );