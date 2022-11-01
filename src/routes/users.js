const { Router } = require('express');
const router = Router();

const games = require('./data.json');
console.log(games);

router.get('/', (req, res) => {
    res.json('users route');
})

module.exports = router;