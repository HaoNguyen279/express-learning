const Laptop = require("../models/Laptop");
const {multipleMongooseToObject, mongooseToObject } = require("../../utils/mongoose");

class SiteController{
    // [GET] /home
    index(req, res){
        Laptop.find({})
            .then(laptops => {
                res.render('home', {laptops : multipleMongooseToObject(laptops)});
            })
            .catch(err => res.status(400).json({error: "ERR!!!"}));
    }
    // [GET] /search
    // create(req,res){
    //     res.render('create');
    // }
}
module.exports  = new SiteController;