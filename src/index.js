const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const hbs = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');

// Connect to database
db.connect();

// Method static khi gặp path trên url này phải kiểm tra với dạng file tĩnh phải kiểm tra thư mục join đã cung cấp trong phương thức static
app.use(express.static(path.join(__dirname, 'public')));

// Use middleware
app.use(express.urlencoded({
    extended: true
})); // gửi form lên server bằng post hay get đều đc
app.use(express.json());
//

//Template engine
app.engine('hbs', hbs.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'))

// HTTP logger
app.use(morgan('combined'));


// Routes init
route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
