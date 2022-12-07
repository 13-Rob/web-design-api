const newsCtrl = {}

const newsA = require('../models/news.js');
//const games = require('../data/data.json');

newsCtrl.getNews = async (req,res) =>{
    const news = await newsA.find()
    res.json(news)
;}

newsCtrl.createNews = async (req, res) => {
    const newNewsA = new newsA(req.body);
    await newNewsA.save();
    res.send({ message: 'News Posted'});
}

newsCtrl.deleteNewsA = async (req, res) => {
    const newsAF = await newsA.findByIdAndDelete(req.params.id);
    res.send({ message: 'News Article Deleted', newsAF });
}

module.exports = newsCtrl;