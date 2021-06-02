const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('gender').notEmpty().withMessage('Tienes que escribir un genero'),
    body('category').notEmpty().withMessage('Tienes que escribir una categoria'),
    body('colors').notEmpty().withMessage('Tienes que escribir un color'),
    body('sizes').notEmpty().withMessage('Tienes que escribir un tamaño'),
    body('price').notEmpty().withMessage('Tienes que escribir un precio')
]