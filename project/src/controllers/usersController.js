const { validationResult } = require('express-validator');
const userModel = require('../database/models/User');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const bcryptjs = require('bcryptjs');

let usersController = {
    login: (req, res) => {
        res.render('user/login');
    },
    
    processLogin: (req, res) => {
        let userToLogin = db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        if (userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 2 })
                }

                return res.redirect('/user/profile');
            } else {
                return res.render('login', {
                    errors: {
                        email: {msg: 'Las credenciales son inválidas'}
                    }
                })
            }
        }

        return res.render('user/login', {
            errors: {
                email: {msg: 'El email no esta registrado'}
            }
        })
    },

    register: (req, res) => {
        res.render('user/register');
    },

    processRegister: async function (req, res) {
        const validations = validationResult(req);

        if (validations.errors.length > 0) {
            return res.render('user/register', {
                errors: validations.mapped(),
                oldData: req.body,
            });
        }

        let userInDb = await db.User.findOne({
            where: {
                email: req.body.email
            }
        });

        console.log(userInDb);

        if (userInDb) {
            return res.render('user/register', {
                errors: {
                    email: {msg: 'Este email ya esta registrado'}
                },
                oldData: req.body,
            });
        } 

        let userToCreate = {
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = db.User.create(userToCreate);
        res.redirect('/');
    },

    profile: (req, res) => {
        res.render('user/profile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;