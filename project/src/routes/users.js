const express = require('express');
const router = express.Router();
const path = require('path');

const usersController = require('../controllers/usersController')

//******Validator******//
const { body } = require('express-validator');
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un email'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
]
//******Validator******//

//******Multer******//
const multer = require('multer');
// Storage de multer
const storage = multer.diskStorage({ 
    destination: function (req, file, cb) { 
       cb(null, '../public/images/user-avatars'); 
    }, 
    filename: function (req, file, cb) { 
       const newFilename = 'avatar-' + Date.now() + path.extname(file.originalname);
       cb(null, newFilename);  
    } 
})

const upload = multer({ storage: storage })
//******Multer******//

// Formulario de login
router.get('/login', usersController.login);

// Formulario de registro
router.get('/register', usersController.register);

// Proceso del registro
router.post('/register', upload.single('avatar'), validations, usersController.processRegister);

// Perfil del usuario
// router.get('/profile/:userId', userController.profile);


module.exports = router;