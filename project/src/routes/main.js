const { defaultMaxListeners } = require('events');
const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const mainController = require('../controllers/mainController')

router.get('/', mainController.index);
router.get('/cart', mainController.cart);
router.get('/enConstruction', mainController.enConstruction);
router.get('/guiaTalles', mainController.guiaTalles);
router.get('/encontranos', mainController.encontranos);
router.get('/team', mainController.team);


module.exports = router;