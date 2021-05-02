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
<<<<<<< HEAD
router.get('/profile', usersController.profile);

=======
// router.get('/profile/:userId', authMiddleware, userController.profile);
>>>>>>> d7c6effb92e4256731b137d78099452f993dd889

router.get('/logout', usersController.logout);

module.exports = router;