const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.json('news route');
})

module.exports = router;