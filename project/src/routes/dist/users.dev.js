"use strict";

/************ Require's ************/
var express = require('express');

var router = express.Router();
/************ Controller Require ************/

var usersController = require('../controllers/usersController');
/*** Middlewares ****/


var upload = require('../middlewares/multerUsersMiddleware');

var validationsRegister = require('../middlewares/validateRegisterMiddleware');

var validationsLogin = require('../middlewares/validateLoginMiddleware');

var guestMiddleware = require('../middlewares/guestMiddleware');

var authMiddleware = require('../middlewares/authMiddleware');
/*** LOGIN FORM ***/


router.get('/login', guestMiddleware, usersController.login);
/*** LOGIN PROCESS ***/

router.post('/login', validationsLogin, usersController.processLogin);
/*** REGISTER FORM ***/

router.get('/register', guestMiddleware, usersController.register);
/*** REGISTER PROCESS ***/

router.post('/register', upload.single('avatar'), validationsRegister, usersController.processRegister);
/*** USER PROFILE ***/

router.get('/profile', authMiddleware, usersController.profile);
/*** USER LOGOUT ***/

router.get('/logout', usersController.logout);
module.exports = router;