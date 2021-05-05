"use strict";

/************ Require's ************/
var express = require('express');

var router = express.Router();
/*** Middlewares ****/

var upload = require('../middlewares/multerProductsMiddleware');

var authMiddleware = require('../middlewares/authMiddleware');
/************ Controller Require ************/


var productosController = require('../controllers/productosController');
/*** GET ALL PRODUCTS ***/


router.get('/products', productosController.index);
/*** GET ONE PRODUCT ***/

router.get('/products/:id', productosController.detail);
/*** PRODUCT PANEL ***/

router.get('/panel', authMiddleware, productosController.panel);
/*** CREATE ONE PRODUCT ***/

router.get('/product-create-form', authMiddleware, productosController.create);
router.post('/product-create', upload.single('img'), productosController.store);
/*** EDIT ONE PRODUCT ***/

router.get('/product-edit-list', authMiddleware, productosController.editList);
router.get('/:id/product-edit-form', authMiddleware, productosController.edit);
router.put('/:id/actualizar', upload.single('img'), productosController.update);
/*** DELETE ONE PRODUCT***/

router["delete"]('/:id/delete', productosController.destroy);
module.exports = router;