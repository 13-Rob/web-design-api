const { Schema, model } = require('mongoose')
const NewsSchema = new Schema({
    title: { type: String, required: true },
    date: { type:String, required: true },
    description: { type:String, required: true },
    source: { type:String, required: true },
    image: { type:String, required: false }
},{
    timestamps:true, //agregar tiempo de creación y modificación
    versionKey:false
})
module.exports = model('News',NewsSchema)