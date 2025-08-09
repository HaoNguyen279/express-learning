const Account = require('../models/Account');
const Laptop = require("../models/Laptop");
const User = require('../models/User');
const Session = require('../models/Session');
const {mongooseToObject, multipleMongooseToObject} = require('../../utils/mongoose');

class LoginController{
    // [GET] Render login page
    index(req,res){
        res.render('login');
    }

    // [GET] Logging out, delete user session on server database, delete cookie on client
    async logout(req, res){
        const sessionId = req.cookies.sessionId;
        await Session.deleteOne({sessionId : sessionId});
        res.setHeader('Set-Cookie', 'sessionId=; max-age=0; Path=/; httpOnly; Secure').redirect('/login');
    }

    // [POST] Valid user account on server database 
    async validAccount(req, res, next){
        const userData = req.body;
        User.findOne({email : userData.email})
            .then(async account =>{
                if(!account){
                    res.render('login', {
                        err : "Wrong email or password!",
                        email : userData.email
                    });
                    return;
                }
                if(account.password === userData.password){
                    const sessionId = Date.now().toString();
                    var session = {
                        sessionId : sessionId,
                        userId : account._id,
                        expireAt : 3600,
                        deviceInfo : "Note 9s Pro Max"
                    }
                    await Session.create(new Session(session))
                        .then(sess => console.log('Successfully created session'))
                        .catch(next);

                    res.setHeader('Set-Cookie', `sessionId=${sessionId};max-age =${session.expireAt}; httpOnly; Secure`)
                        .redirect('/');
                }
                else{
                    res.redirect('/login');
                    return;
                }
            })
    }

    // [GET] Render register page
    renderRegister(req,res,next){
        res.render('register');
    }
    // [POST] Create user account -> store to database (MongoDB)
    async createAccount(req,res,next){
        const account_raw = req.body;
        console.log(account_raw);
        const newAccount = new User(account_raw);
        await User.create(newAccount)
            .then(() => res.render('registeredSuccessfully'))
            .catch(next);
        console.log(newAccount);
    }
}

module.exports = new LoginController;