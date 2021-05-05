"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('express-validator'),
    validationResult = _require.validationResult;

var userModel = require('../models/user');

var bcryptjs = require('bcryptjs');

var usersController = {
  login: function login(req, res) {
    res.render('login');
  },
  processLogin: function processLogin(req, res) {
    var userToLogin = userModel.findByField('email', req.body.email);

    if (userToLogin) {
      var isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);

      if (isOkPassword) {
        delete userToLogin.password;
        req.session.userLogged = userToLogin;

        if (req.body.remember_user) {
          res.cookie('userEmail', req.body.email, {
            maxAge: 1000 * 60 * 2
          });
        }

        return res.redirect('/user/profile');
      } else {
        return res.render('login', {
          errors: {
            email: {
              msg: 'Las credenciales son inválidas'
            }
          }
        });
      }
    }

    return res.render('login', {
      errors: {
        email: {
          msg: 'El email no esta registrado'
        }
      }
    });
  },
  register: function register(req, res) {
    res.render('register');
  },
  processRegister: function processRegister(req, res) {
    var validations = validationResult(req);

    if (validations.errors.length > 0) {
      return res.render('register', {
        errors: validations.mapped(),
        oldData: req.body
      });
    }

    var userInDb = userModel.findByField('email', req.body.email);

    if (userInDb) {
      return res.render('register', {
        errors: {
          email: {
            msg: 'Este email ya esta registrado'
          }
        },
        oldData: req.body
      });
    }

    var userToCreate = _objectSpread({}, req.body, {
      password: bcryptjs.hashSync(req.body.password, 10),
      avatar: req.file.filename
    });

    var userCreated = userModel.create(userToCreate);
    res.redirect('/');
  },
  profile: function profile(req, res) {
    res.render('profile', {
      user: req.session.userLogged
    });
  },
  logout: function logout(req, res) {
    req.session.destroy();
    return res.redirect('/');
  }
};
module.exports = usersController;