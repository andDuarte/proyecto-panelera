// no usar
import { Schema, model } from 'mongoose';

export const TYPEDOCUMENT = [ 'CC', 'TI', 'PA' ]

const tyDocumentSchema = new Schema({
  name: String,
}, {
    versionKey: false,
});

export default model('TypeDocument', tyDocumentSchema );