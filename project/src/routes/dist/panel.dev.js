"use strict";

var express = require('express');

var router = express.Router();

var panelController = require('../controllers/panelController');

var authMiddleware = require('../middlewares/authMiddleware');
/*** INDEX DEL PANEL ***/


router.get('/', authMiddleware, panelController.index);
module.exports = router;