const express = require('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/usersController');

// Middlewares
const upload = require ('../middlewares/multerMiddleware');
const validations = require ('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Proceso de login
router.post('/login', usersController.processLogin);

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Proceso del registro
router.post('/register', upload.single('avatar'), validations, usersController.processRegister);

// Perfil del usuario
// router.get('/profile/:userId', authMiddleware, userController.profile);

router.get('/logout', usersController.logout);

module.exports = router;