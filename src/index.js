const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000
const hbs = require('express-handlebars');
const path = require('path');

//Template engine
app.engine('hbs', hbs.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

// HTTP logger
app.use(morgan('combined'));

app.get('/adu', (req, res) => {
    res.send('Hello Wordddd!');
})
app.get('/', (req,res) =>{
    res.render('home');
} )

app.get('/news', (req,res) =>{
    console.log(req.query.name);
    res.render('news');
})

app.get('/search', (req,res) =>{
    console.log(req.query.name);
    res.render('search');
})

app.get('/jack', (req,res) => {
    console.log(res.cookie);
    res.send(`<a href='https://www.google.gg/'>Alo</a>`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
