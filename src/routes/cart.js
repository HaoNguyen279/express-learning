const express = require('express');
const router = express.Router();
const CartController = require('../app/controllers/CartController');

router.get('/', CartController.showCart);

router.get('/test', CartController.testjson);

module.exports = router;