const Laptop = require("../models/Laptop");
const Session = require('../models/Session');
const User = require('../models/User');
const mongoose = require('mongoose');
const {multipleMongooseToObject, mongooseToObject } = require("../../utils/mongoose");

class SiteController{

    // [GET] Render home page
    async index(req, res, next){
        var laptops_raw =  await Laptop.find({});
        const session_id = req.cookies.sessionId;
        Session.findOne({sessionId : session_id})
            .then(async session =>{
                if(!session){
                    res.render('home', {laptops : multipleMongooseToObject(laptops_raw)});
                    return;
                }
                // session => console.log(session);
                if(session){
                    User.findOne({ _id : session.userId})
                        .then(user =>{
                            res.render('home', {laptops : multipleMongooseToObject(laptops_raw), user : mongooseToObject(user)});
                            console.log(user);
                        })
                }
            })
            .catch(next);
        // console.log(req.cookies);
    }
}
module.exports  = new SiteController;