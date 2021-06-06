const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de usuarios
router.get('/', usersAPIController.list);
//Detalle de un usuarios
router.get('/:id', usersAPIController.detail);
//Modificar un usuario
router.put('/update/:id', usersAPIController.update);
//Eliminar un usuario
router.delete('/delete/:id', usersAPIController.destroy);

module.exports = router;