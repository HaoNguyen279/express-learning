var express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/search',siteController.search);
// get o duoi
// use o cap cao hon
router.get('/', siteController.index);

module.exports = router;