const express = require('express');
const app = express();
const rutasMain = require('./routes/main');
const rutasProductos = require('./routes/productos');
const rutasUsers = require('./routes/users');
const rutasPanel = require('./routes/panel');
const methodOverride = require('method-override');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(express.static('../public'));
app.set('view engine', 'ejs');

app.use('/', rutasMain);
app.use('/product', rutasProductos);
app.use('/user', rutasUsers);
app.use('/panel', rutasPanel);

app.use((req, res, next) => {
    res.status(404).render('404');
})

app.listen(3000, ()=>{
    console.log('Servidor funcionando');
});

module.exports = app;
