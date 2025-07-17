const Laptop = require('../models/Laptop');
const User = require('../models/User');
const {mongooseToObject, multipleMongooseToObject} = require('../../utils/mongoose');

class CartController{
    showCart(req, res, next){
        res.render('shoppingCart');
    }
    testjson(req, res, next){
        User.find({})
            .then(data => res.json(data))
            .catch(next);
    }
}

module.exports = new CartController;