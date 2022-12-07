const { Router } = require('express');
const router = Router();

const gamesCtrl = require("../controllers/games.controller");

// Pasa la informacion de todos los juegos.
router.get('/', gamesCtrl.getGames);

// Pasa la informacion de un juego en especifico basado en la id.
router.get('/:id', gamesCtrl.getGame);

// Actualiza la informacion de un juego.
router.put('/:id', gamesCtrl.updateGame);

// Crea/Se publica un nuevo juego.
router.post('/', gamesCtrl.postGame);

// Busca un juego en base al titulo.
router.get('/title/:title', gamesCtrl.searchGame);

// Elimina un juego.
router.delete('/:id', gamesCtrl.deleteGame);

module.exports = router;
