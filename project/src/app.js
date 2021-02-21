const express = require('express');
const app = express();
const rutasMain = require('./routes/main');
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');

app.use(express.static('../public'));
app.set('view engine', 'ejs');

app.use('/', rutasMain);
app.use('/product', rutasProductos);
app.use('/user', rutasUsers);

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

module.exports = app;
