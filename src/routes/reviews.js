const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('reviews route');
})

module.exports = router;
