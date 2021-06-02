const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('description').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('gender').notEmpty().withMessage('Tienes que escribir un genero'),
    body('category').notEmpty().withMessage('Tienes que escribir una categoria'),
    body('colors').notEmpty().withMessage('Tienes que escribir un color'),
    body('sizes').notEmpty().withMessage('Tienes que escribir un tamaño'),
    body('price').notEmpty().withMessage('Tienes que escribir un precio'),
    body('img').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

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