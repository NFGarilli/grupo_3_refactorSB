/*** REQUIRES ***/ 
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

/*** MIDDLEWARES ***/
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookies());
app.use(userLoggedMiddleware);
app.use(methodOverride('_method'));
app.use(express.static('../public'));
app.set('view engine', 'ejs');

app.use(session ({
    secret: "El polaco bastia",
    resave: false,
    saveUninitialized: false,
}));

const rutasMain = require('./routes/main');
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');

/*** ROUTES ***/
app.use('/', rutasMain);
app.use('/product', rutasProductos);
app.use('/user', rutasUsers);
// ************ error handler ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

module.exports = app;
