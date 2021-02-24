const { defaultMaxListeners } = require('events');
const express = require('express');
const router = express.Router();

const panelController = require('../controllers/panelController');

router.get('/', panelController.index);



module.exports = router;