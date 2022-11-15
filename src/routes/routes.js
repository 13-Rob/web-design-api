const { Router } = require('express');
const router = Router();

const games = require('./data/data.json');
console.log(games);

const newsCtrl = require('../controllers/news.controller')

router.get('/', newsCtrl.getNews)

router.get('/:id', (req, res) => {
    const id = req.params.id;

    games.forEach(game => {
        if(game.id == id){
            res.json(game)
        }
    })
})

router.post('/', newsCtrl.createNews)

//(req, res) => {
//    const {title, description, score} = req.body;
//   if(title && description && score){
//        const id = games.length;
//        const newGame = {id, ...req.body};
//        juegos.push(newGame);

//        res.send(games);
//    }else{
//        res.status(500).json({error: 'no data'});
//    }
//}

module.exports = router;