const express = require('express');
const router = express.Router();

router.get('/product-detail', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/product-detail'));
});

router.get('/product-cart', (req,res)=>{
    res.sendFile(path.resolve(__dirname + '/product-cart'));
});

module.exports = router;