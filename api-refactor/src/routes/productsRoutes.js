const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.list);
router.get('/detail/:id', productsController.detail);
//Rutas exigidas para la creación del CRUD
router.get('/add', productsController.add);
router.post('/create', productsController.create);
router.get('/edit/:id', productsController.edit);
router.put('/update/:id', productsController.update);
router.delete('/delete/:id', productsController.destroy);

module.exports = router;