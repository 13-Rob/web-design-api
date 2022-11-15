const {Schema, model} = requiere('mongoose')
const NewsSchema = new Schema({
    title:{type:String, required:true},
    date:{type:String, required:true},
    description:{type:String, required:true},
    source:{type:String, required:true}
},{
    timestamps:true, //agregar tiempo de creación y modificación
    versionKey:false
})
module.exports = model('News',NewsSchema)

const { Router } = require('express');
const router = Router();

const news = require('../routes/data/news.json');

router.get('/', (req, res) => {
    res.json(news);
})

module.exports = router;