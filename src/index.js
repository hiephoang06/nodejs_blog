const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');
const { dir } = require('console');

//static
app.use(express.static(path.join(__dirname,'public')));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine('hbs', handlebars.engine({ 
  defaultLayout: 'main' ,
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resource/views'));

//route
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})