var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const LaptopController = require('../app/controllers/LaptopController');


// get o duoi
// use o cap cao hon
router.get('/laptops', siteController.index);

router.post('/store', LaptopController.store)

module.exports = router;