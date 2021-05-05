/*** REQUIRES ***/ 
const express = require('express');
const app = express();
const rutasMain = require('./routes/main');
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
const cookies = require('cookie-parser');

/*** MIDDLEWARES ***/
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(session ({
    secret: "El polaco bastia",
    resave: false,
    saveUninitialized: false,
}))

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(methodOverride('_method'));

app.use(express.static('../public'));
app.set('view engine', 'ejs');

/*** ROUTES ***/
app.use('/', rutasMain);
app.use('/product', rutasProductos);
app.use('/user', rutasUsers);

app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

module.exports = app;
