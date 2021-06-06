const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const usersController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/user'
                    },
                    data: users
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },
    update: function (req, res) {
        let userId = req.params.id;
        db.User.update(
            {...req.body},
            {
                where: {id: userId}
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/user/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let userId = req.params.id;
        db.User.destroy({where: {id: userId}, force: true}) //Force es para que la accion se ejecute
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/user/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/user/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
    }
}

module.exports = usersController;