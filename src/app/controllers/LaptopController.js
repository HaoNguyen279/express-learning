const Laptop = require("../models/Laptop");
const {multipleMongooseToObject, mongooseToObject} = require('../../utils/mongoose');

class LaptopController{

    index(req, res,next){
        Laptop.findOne({slug : req.params.slug})
            .then(laptop => {
                res.render('laptops/productdetail', mongooseToObject(laptop));
            })
            .catch(next);
      
    }
}

module.exports = new LaptopController;