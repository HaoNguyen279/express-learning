const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000
const hbs = require('express-handlebars');
const path = require('path');

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

app.get('/adu', (req, res) => {
    res.send('Hello Wordddd!');
})
app.get('/', (req,res) =>{
    res.render('home');
})

app.get('/news', (req,res) =>{
    console.log(req.query.name);
    res.render('news');
})

app.get('/search', (req,res) =>{
    console.log(req.query.name);
    res.render('search');
})


app.post('/news', (req,res) =>{
    console.log(req.body)
    res.send('');
})
// Middle dc cài sẵn 1 lib là 'qs' (query string - npm) có nhiệm vụ nhận Form Data từ client gửi lên và parse sang biến body

app.get('/jack', (req,res) => {
    res.send(`<a href='https://www.google.gg/'>Alo</a>`);
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
