// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// ************ Controller Require ************
const productosController = require('../controllers/productosController')

/*** MULTER ***/ 
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../public/images/product-images'); 
    }, 
    filename: function (req, file, cb) { 
       const newFilename = 'product-' + Date.now() + path.extname(file.originalname);
       cb(null, newFilename);  
    } 
})    

var upload = multer({ storage: storage })

/*** GET ALL PRODUCTS ***/ 
router.get('/products', productosController.index);

/*** GET ONE PRODUCT ***/ 
router.get('/products/:id', productosController.detail);

// /*** CREATE ONE PRODUCT ***/ 
router.get('/product-create-form', productosController.create);
router.post('/product-create', upload.single('img'), productosController.store);

// /*** EDIT ONE PRODUCT ***/ 
router.get('/product-edit-list', productosController.editList);
router.get('/:id/product-edit-form', productosController.edit); 
router.put('/:id/actualizar', upload.single('img'), productosController.update); 

// /*** DELETE ONE PRODUCT***/ 
router.delete('/:id/delete', productosController.destroy); 

module.exports = router;