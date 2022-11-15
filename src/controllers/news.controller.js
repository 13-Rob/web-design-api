const newsCtrl = {}

const productos = require('../models/news.js')
//const games = require('../data/data.json');

newsCtrl.getNews = async (req,res) =>{
    const news = await productos.find()
    res.json(news)
;}

newsCtrl.createNews = (req, res) => {
    new news 
    console.log(req.body)
}

module.exports = newsCtrl;

//Video  24:28