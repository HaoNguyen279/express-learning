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
    create(req, res, next){
        res.render('laptops/create');
    }
    async store(req, res, next){
        const data = req.body;
        const laptop = new Laptop(data);    
        await Laptop.create(laptop)
            .then(console.log("Ok saved!!!"));
        res.send('LAPTOP SAVED!!');
        // res.json(req.body);
    }

}

module.exports = new LaptopController;