const { Router } = require('express');
const router = Router();

const newsCtrl = require("../controllers/news.controller");

// Pasa todas las noticias
router.get('/', newsCtrl.getNews);

// Crea una nueva noticia
router.post('/', newsCtrl.createNews);

// Borra una noticia
router.delete('/:id', newsCtrl.deleteNewsA);

module.exports = router;
