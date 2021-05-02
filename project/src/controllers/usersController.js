const fs = require('fs');
const { validationResult } = require('express-validator');
const userModel = require('../models/user');
const bcryptjs = require('bcryptjs');

let usersController = {
    login: (req, res) => {
        res.render('login');
    },

    processLogin: (req, res) => {
        let userToLogin = userModel.findByField('email', req.body.email);

        if (userToLogin){
            let isOkPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            if(isOkPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                return res.redirect('/user/profile');
            } else {
                return res.render('login', {
                    errors: {
                        email: {msg: 'Las credenciales son inválidas'}
                    }
                })
            }
        }

        return res.render('login', {
            errors: {
                email: {msg: 'El email no esta registrado'}
            }
        })
    },

    register: (req, res) => {
        res.render('register');
    },

    processRegister: (req, res) => {
        const validations = validationResult(req);

        if (validations.errors.length > 0) {
            return res.render('register', {
                errors: validations.mapped(),
                oldData: req.body,
            });
        }

        let userInDb = userModel.findByField('email', req.body.email);

        if (userInDb) {
            return res.render('register', {
                errors: {
                    email: {msg: 'Este email ya esta registrado'}
                },
                oldData: req.body,
            });
        } 

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = userModel.create(userToCreate);
        res.redirect('/');
    },

    profile: (req, res) => {
        res.render('userProfile', {
            user: req.session.userLogged
        });
    },

    logout: (req, res) => {
        req.session.destroy();
        return res.redirect('/');
    }
}

module.exports = usersController;