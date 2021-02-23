const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController')

router.get('/product-detail', productosController.productDetail);

module.exports = router;