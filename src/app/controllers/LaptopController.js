const Laptop = require("../models/Laptop");
const User = require("../models/User");
const {multipleMongooseToObject, mongooseToObject} = require('../../utils/mongoose');
const Session = require("../models/Session");

class LaptopController{

    // [GET] Render laptop detail page
    async index(req, res,next){
        const sessionId_cookie = req.cookies.sessionId;
        const laptopDetail = await Laptop.findOne({slug : req.params.slug}).then(laptop => {
            console.log(laptop);
            return laptop;
        });
        
        if(!sessionId_cookie){
            res.render('laptops/productdetail', {laptopDetail : mongooseToObject(laptopDetail)});
            return;
        }
        else{
            Session.findOne({sessionId : sessionId_cookie})
                .then(sess => {
                    if(!sess){
                        console.log(1);
                        res.render('laptops/productdetail', {laptopDetail : mongooseToObject(laptopDetail)});
                        return;
                    }else{
                        User.findOne({_id : sess.userId })
                            .then(user_data =>{
                                if(!user_data){
                                    console.log('2' + user_data + sess + sess.userId);
                                    res.render('laptops/productdetail', {laptopDetail : mongooseToObject(laptopDetail)});
                                    return;
                                }else{
                                    console.log(user_data);
                                    console.log(3);
                                    res.render('laptops/productdetail', {laptopDetail : mongooseToObject(laptopDetail), user : mongooseToObject(user_data)});
                                    return;
                                }
                            })
                            .catch(next);
                    }
                })
                .catch(next);
        }
        
    }

    // [GET] Route làm cho vui test JSON (Ignore ts pls)
    create(req, res, next){
        res.render('laptops/create');
    }
    // [POST] Store Laptop to server database
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