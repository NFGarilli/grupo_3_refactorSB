const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsController = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/product'
                    },
                    data: products
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: products.length,
                        url: 'api/product/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    create: function (req, res) {
        let image 

        if (req.file != undefined){
            image = req.file.filename
        } 
        else {
            image = "default-image.png"
        }
        
        db.Product.create(
            {
            name: req.body.name,
            description: req.body.description,
            img: image,
            gender: req.body.gender,
            category: req.body.category,
            color: req.body.color,
            sizes: req.body.sizes,
            price: req.body.price
            }
        )
        .then(() => {
            let respuesta;
            if(confirm) {
                respuesta = {
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/product/create'
                    },
                    data: confirm
                }
            } else {
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/movies/create'
                    },
                    data:confirm
            }
            res.json(respuesta);
            }
        })
        .catch(error => res.send(error))
    },
    update: function (req, res) {
        let productId = req.params.id;
        db.Product.update(
            {...req.body},
            {
                where: {id: productId}
            }
        )
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/product/update/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/product/update/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let productId = req.params.id;
        db.Product.destroy({where: {id: productId}, force: true}) //Force es para que la accion se ejecute
        .then(confirm => {
            let respuesta;
            if(confirm){
                respuesta ={
                    meta: {
                        status: 200,
                        total: confirm.length,
                        url: 'api/product/destroy/:id'
                    },
                    data:confirm
                }
            }else{
                respuesta ={
                    meta: {
                        status: 204,
                        total: confirm.length,
                        url: 'api/product/destroy/:id'
                    },
                    data:confirm
                }
            }
            res.json(respuesta);
        })
        .catch(error => res.send(error))
    }
}

module.exports = productsController;