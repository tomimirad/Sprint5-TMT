//! ************ Requires ************

const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
const session = require('express-session');


//! ************ Middlewares************

const userLogged = require('./middlewares/userLoggedMiddleware')
const cartItems = require('./middlewares/cartItemsMiddleware')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'Mensaje secreto.',
    resave: false,
    saveUninitialized: false
}));


app.use(express.json());

app.use(methodOverride('_method'));

app.use(userLogged)
app.use(cartItems)
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