var express = require('express');
const router = express.Router();
const laptopController = require('../app/controllers/LaptopController');

router.get('/:slug', laptopController.index);

module.exports = router;
