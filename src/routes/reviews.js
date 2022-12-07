const { Router } = require('express');
const router = Router();

const reviewsCtrl = require('../controllers/reviews.controller');

// Pasa la informacion de todas las reviews.
router.get('/', reviewsCtrl.getReviews);

// Pasa la informacion de una review en base a la id.
router.get('/:id', reviewsCtrl.getReview);

// Devuelve las reviews de cierto juego.
router.get('/title/:game', reviewsCtrl.getGameReviews);

router.post('/write', reviewsCtrl.createReview);

router.put('/:id', reviewsCtrl.updateReview);

router.delete('/', reviewsCtrl.deleteReview);

module.exports = router;
