
const loginRouter = require('./login');
const siteRouter = require('./site');
const laptopRouter = require('./laptops');

function route(app){

    app.use('/login', loginRouter);
    
    app.use('/', siteRouter);

    app.use('/laptops', laptopRouter);

    // Middle dc cài sẵn 1 lib là 'qs' (query string - npm) có nhiệm vụ nhận Form Data từ client gửi lên và parse sang biến body
}
module.exports =  route;