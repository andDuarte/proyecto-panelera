import { Schema, model } from 'mongoose'

export const CATEGORY = ['Maquinaria', 'Herramientas', 'Insumos']

const categorySchema = new Schema({
    name: String
}, {
    versionKey: false
})

export default model('Category', categorySchema)