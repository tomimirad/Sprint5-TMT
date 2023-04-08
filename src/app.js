//! ************ Requires ************

const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');


//! ************ Middlewares************

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({secret: 'Mensaje secreto.'}));

app.use(express.json());

app.use(methodOverride('_method'));

//! ************ Template Engine  ************
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));



const usersRouter = require('./routes/users')
const mainRouter = require('./routes/main'); // Rutas main
const productsRouter = require('./routes/products'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/', usersRouter);


const port = 3000


app.listen(port, () => console.log(`aplicación funcionando ${port}!`))