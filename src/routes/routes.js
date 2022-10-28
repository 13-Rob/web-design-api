const { Router } = require('express');
const router = Router();

const juegos = require('./data.json');
console.log(juegos);

router.get('/', (req, res) => {
    res.json(juegos);
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    juegos.forEach(juego => {
        if(juego.id == id){
            res.json(juego)
        }
    })
})

router.post('/', (req, res) => {
    const {title, description, score} = req.body;
    if(title && description && score){
        const id = juegos.length;
        const nuevoJuego = {id, ...req.body};
        juegos.push(nuevoJuego);

        res.send(juegos);
    }else{
        res.status(500).json({error: 'no data'});
    }
})

module.exports = router;