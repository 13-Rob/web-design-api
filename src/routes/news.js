const { Router } = require('express');
const router = Router();

const newsCtrl = require("../controllers/news.controller");

router.get('/', newsCtrl.getNews);

router.post('/', newsCtrl.createNews);

router.delete('/:id', newsCtrl.deleteNewsA);

module.exports = router;
