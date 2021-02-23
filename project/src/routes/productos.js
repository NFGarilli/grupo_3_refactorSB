const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController')

router.get('/product-detail/:id', productosController.productDetail);
router.get('/product-list', productosController.productList);

module.exports = router;