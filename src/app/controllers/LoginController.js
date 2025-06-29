class LoginController{
    // [GET] /login
    index(req,res){
        res.render('login');
    }
    childRoute(req,res){
        res.send('<h1>Route con</h1>')
    }
}

module.exports = new LoginController;