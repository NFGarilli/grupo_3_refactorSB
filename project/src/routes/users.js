const express = require('express');
const router = express.Router();
const path = require('path');

const usersController = require('../controllers/usersController')

//******Validator******//
const { body } = require('express-validator');
const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Tienes que escribit un formato de email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', 'jpeg', 'png', '.gif'];

        if (!file){
            throw new Error('Debes subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
            }
        }
        
        return true;
    })
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
router.get('/profile', usersController.profile);



module.exports = router;