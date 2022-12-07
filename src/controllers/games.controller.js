const gamesCtrl = {}

const game = require('../models/games.js');
//const games = require('../routes/data/games.json')

gamesCtrl.getGames = async (req, res) => {
    const games = await game.find();
    res.json(games);
}

gamesCtrl.getGame = async (req, res) => {
    const gameF = await game.findById(req.params.id);
    res.send(gameF);
}

gamesCtrl.postGame = async (req, res) => {
    const newGame = new game(req.body);
    await newGame.save();
    res.send({ message: 'Game Posted' });
}

gamesCtrl.updateGame = async (req, res) => {
    const gameF = await game.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: 'game Updated', gameF });
}

gamesCtrl.searchGame = async (req, res) => {
    const x = await game.find({ title: req.params.title });
    res.send(x);
}

gamesCtrl.deleteGame = async (req, res) => {
    const gameF = await game.findByIdAndDelete(req.params.id);
    res.send({ message: 'Game Deleted', gameF });
}

module.exports = gamesCtrl;
