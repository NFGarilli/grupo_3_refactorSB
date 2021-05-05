"use strict";

var path = require('path');

var _require = require('express-validator'),
    body = _require.body;

module.exports = [body('name').notEmpty().withMessage('Tienes que escribir un nombre'), body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'), body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Tienes que escribir un formato de email valido'), body('password').notEmpty().withMessage('Tienes que escribir una contraseña'), body('avatar').custom(function (value, _ref) {
  var req = _ref.req;
  var file = req.file;
  var acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

  if (!file) {
    throw new Error('Debes subir una imagen');
  } else {
    var fileExtension = path.extname(file.originalname);

    if (!acceptedExtensions.includes(fileExtension)) {
      throw new Error('Las extensiones de archivo permitidas son ' + acceptedExtensions.join(', '));
    }
  }

  return true;
})];