var express = require('express');
const router = express.Router();
const laptopController = require('../app/controllers/LaptopController');


router.get('/create', laptopController.create);

router.post('/store', laptopController.store);
 
router.get('/:slug', laptopController.index);

module.exports = router;
