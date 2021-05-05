"use strict";

var path = require('path');

var _require = require('express-validator'),
    body = _require.body;

module.exports = [body('email').notEmpty().withMessage('Tienes que escribir un email').bail().isEmail().withMessage('Tienes que escribir un formato de email valido'), body('password').notEmpty().withMessage('Tienes que escribir una contraseña')];