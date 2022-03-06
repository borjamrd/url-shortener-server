var router = require('express').Router();

router.get('/', require('../controllers/getUser'));
router.post('/', require('../controllers/postUser'));

module.exports = router;