const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersDB.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const { validationResult } = require('express-validator');

let usersController = {
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const validations = validationResult(req);

        if (validations.errors.length > 0) {
            return res.render('register', {
                errors: validations.mapped(),
            });
        } else {
            let image;
            
            if (req.file != undefined) {
                image = req.file.filename
            } else {
                "default-image.png"
            }
    
            let ids = users.map(p => p.id);
            let newUser = {
                id: Math.max(...ids) +1,
                avatar: image,
                ...req.body
            }
    
            users.push(newUser);
            fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
            res.redirect('/');
        }
    },
    profile: (req, res) => {
        res.render('userProfile');
    }
}

module.exports = usersController;