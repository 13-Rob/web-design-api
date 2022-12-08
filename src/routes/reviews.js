const { Router } = require('express');
const router = Router();

const reviewsCtrl = require('../controllers/reviews.controller');

// Pasa la informacion de todas las reviews.
router.get('/', reviewsCtrl.getReviews);

// Pasa la informacion de una review en base a la id.
router.get('/:id', reviewsCtrl.getReview);

// Devuelve las reviews de cierto juego.
router.get('/title/:game', reviewsCtrl.getGameReviews);

// Se crea una nueva review.
router.post('/', reviewsCtrl.createReview);

// Se actualiza una review.
router.put('/:id', reviewsCtrl.updateReview);

// Se elimina una review.
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router;
