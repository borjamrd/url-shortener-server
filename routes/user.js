var router = require('express').Router();

router.get('/', require('../controllers/users/getUser'));
router.post('/', require('../controllers/users/postUser'));

module.exports = router;