const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('email')
        .notEmpty().withMessage('Tienes que escribir un email').bail()
        .isEmail().withMessage('Tienes que escribir un formato de email valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]