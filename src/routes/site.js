var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');
const LaptopController = require('../app/controllers/LaptopController');


// get o duoi
// use o cap cao hon
router.post('/store', LaptopController.store)

router.get('/', siteController.index);

module.exports = router;