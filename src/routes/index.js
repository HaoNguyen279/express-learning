
const loginRouter = require('./login');
const siteRouter = require('./site');
const laptopRouter = require('./laptops');  
const registerRouter = require('./register');
const cartRouter = require('./cart');

const Laptop = require('../app/models/Laptop');


function route(app){

    app.use('/login', loginRouter);

    app.use('/cart',cartRouter );
    
    app.use('/register', registerRouter);
    
    app.use('/logout', loginRouter );
    
    app.use('/laptops', laptopRouter);

    app.use('/', siteRouter);


    app.get('/api/product', (req,res) =>{
        Laptop.find({})
            .then(laptops => res.json(laptops))
            .catch(err => console.log(err));
    });

    // Middle dc cài sẵn 1 lib là 'qs' (query string - npm) có nhiệm vụ nhận Form Data từ client gửi lên và parse sang biến body
}
module.exports =  route;