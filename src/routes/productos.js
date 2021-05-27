/************ Require's ************/
const express = require('express');
const router = express.Router();

/*** Middlewares ****/
const upload = require ('../middlewares/multerProductsMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

/************ Controller Require ************/
const productosController = require('../controllers/productosController')

/*** GET ALL PRODUCTS ***/ 
router.get('/products', productosController.index);

/*** GET ONE PRODUCT ***/ 
router.get('/products/:id', productosController.detail);

/*** PRODUCT PANEL ***/
router.get('/panel', authMiddleware, productosController.panel);

/*** CREATE ONE PRODUCT ***/ 
router.get('/product-create-form', authMiddleware, productosController.create);
router.post('/product-create', upload.single('img'), authMiddleware, productosController.store);

/*** EDIT ONE PRODUCT ***/ 
router.get('/product-edit-list', authMiddleware, productosController.editList);
router.get('/:id/product-edit-form', authMiddleware, productosController.edit); 
router.put('/:id/actualizar', upload.single('img'), authMiddleware, productosController.update); 

/*** DELETE ONE PRODUCT***/ 
router.delete('/:id/delete', productosController.destroy); 

module.exports = router;