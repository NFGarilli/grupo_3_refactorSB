/************ Require's ************/
const express = require('express');
const router = express.Router();

/************ Controller Require ************/
const usersController = require('../controllers/usersController');

/*** Middlewares ****/
const upload = require ('../middlewares/multerUsersMiddleware');
const validationsRegister = require ('../middlewares/validateRegisterMiddleware');
const validationsLogin = require ('../middlewares/validateLoginMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

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