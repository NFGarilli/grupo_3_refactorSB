"use strict";

var express = require('express');

var app = express();

var rutasMain = require('./routes/main');

var rutasProductos = require('./routes/productos');

var rutasUsers = require('./routes/users');

var rutasPanel = require('./routes/panel');

var methodOverride = require('method-override');

var session = require('express-session');

var userLoggedMiddleware = require('./middlewares/userLoggedMiddleware'); // const cookies = require('cookie-parser');


app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(session({
  secret: "El polaco bastia",
  resave: false,
  saveUninitialized: false
})); // app.use(cookies);

app.use(userLoggedMiddleware);
app.use(methodOverride('_method'));
app.use(express["static"]('../public'));
app.set('view engine', 'ejs');
app.use('/', rutasMain);
app.use('/product', rutasProductos);
app.use('/user', rutasUsers);
app.use('/panel', rutasPanel);
app.use(function (req, res, next) {
  res.status(404).render('404');
});
app.listen(3000, function () {
  console.log('Servidor funcionando');
});
module.exports = app;