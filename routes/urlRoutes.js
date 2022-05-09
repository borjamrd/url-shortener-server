const express = require('express');
const protect = require('../middleware/authmiddleware');
const {createUrl, getUrls, getUrlById, updateUrl, deleteUrl, redirectUrl,createwauth} = require('./../controllers/urlController');


const router = express.Router()

router.route('/').get(protect, getUrls)
router.route('/create').post(protect,createUrl)
router.route('/createwauth').post(createwauth)
router.route('/:urlId').get(redirectUrl)
router.route('/orig/:id').get(getUrlById).put(protect, updateUrl).delete(protect, deleteUrl)
    

    
module.exports = router;