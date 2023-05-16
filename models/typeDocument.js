import { Schema, model } from 'mongoose';

export const TYPEDCOCUMENT= [ 'Cc', 'Ti', 'Ce', 'Ps', 'Dni', 'Nit', 'Pr', 'Pep', 'Ppt' ]

const tyDocumentSchema = new Schema({
  TypeDocument: String
},{
    versionKey: false
})
export default model('TypeDocument',tyDocumentSchema )