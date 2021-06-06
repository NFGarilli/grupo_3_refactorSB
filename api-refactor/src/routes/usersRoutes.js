const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get('/', usersController.list);
router.get('/detail/:id', usersController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/edit/:id', usersController.edit);
router.put('/update/:id', usersController.update);
router.delete('/delete/:id', usersController.destroy);

module.exports = router;