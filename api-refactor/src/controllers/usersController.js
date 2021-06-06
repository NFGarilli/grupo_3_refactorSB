const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                res.render('usersList.ejs', {users})
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                res.render('userDetail.ejs', {user});
            });
    },



    edit: async function (req, res) {
        let userToEdit = await db.User.findByPk(req.params.id);
            
        res.render('userEdit.ejs', {user : userToEdit})
    },
    update: function (req, res) {
        let userId = req.params.id;
        db.User.update(
            {...req.body},
            {
                where: {id: userId}
            }
        )
        .then(() => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        db.User.destroy({where: {id: userId}, force: true}) 
        .then(() => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    }
}

module.exports = usersController;