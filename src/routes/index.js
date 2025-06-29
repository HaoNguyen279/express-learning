
const loginRouter = require('./login');
const siteRouter = require('./site');

function route(app){

    app.use('/login', loginRouter);
    
    app.use('/', siteRouter);

    // Middle dc cài sẵn 1 lib là 'qs' (query string - npm) có nhiệm vụ nhận Form Data từ client gửi lên và parse sang biến body
}
module.exports =  route;