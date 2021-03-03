const express = require('express');
const router = express.Router();

const panelController = require('../controllers/panelController');

/*** INDEX DEL PANEL ***/
router.get('/', panelController.index);


module.exports = router;