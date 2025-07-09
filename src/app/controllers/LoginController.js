const Account = require('../models/Account');
const {mongooseToObject} = require('../../utils/mongoose');

class LoginController{
    // [GET] /login
    index(req,res){
        res.render('login');
    }
    childRoute(req,res){
        res.send('<h1>Route con</h1>');
    }
    // [POST] valid account 
    validAccount(req, res, next){
        const data = req.body;  
        console.log(data.username);
        console.log(data.password);
        Account.findOne({username: data.username})
            .then(accountRawData => {
                console.log(accountRawData);
                if(!accountRawData) {
                    res.render('loginSuccess');
                    return;
                }
                if(accountRawData.password === data.password){
                     res.send('vai lon acc dung ne');
                }
                else { res.send('Am cut di');}
            })
            .catch(next);
    }
    renderRegister(req,res,next){
        res.render('register');
    }
    async createAccount(req,res,next){
        const account_raw = req.body;

        const newAccount = new Account(account_raw);
        await Account.create(newAccount)
            .then(res.send('saved account!'))
            .catch(next);

    }
}

module.exports = new LoginController;