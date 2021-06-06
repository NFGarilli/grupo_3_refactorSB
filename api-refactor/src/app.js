const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

//Ejecuto el llamado a mis rutas
const indexRouter = require('./routes/index');
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

//Aquí llamo a la ruta de las APIs
const apiProductsRouter = require('./routes/api/products')
const apiUsersRouter = require('./routes/api/users')

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));

//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/product', productsRoutes);
app.use('/user', usersRoutes);
//Aquí creo la colección de mis recursos de APIs
app.use('/api/product',apiProductsRouter);
app.use('/api/user',apiUsersRouter);

//Activando el servidor desde express
app.listen('3001', () => console.log('Rock en el puerto 3001'));
