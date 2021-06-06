const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

const productsController = {
    'list': (req, res) => {
        db.Product.findAll()
            .then(products => {
                res.render('productList.ejs', {products})
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                res.render('productDetail.ejs', {product});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {
        res.render('productAdd.ejs')
    },
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
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    },
    edit: async function (req, res) {
        let productToEdit = await db.Product.findByPk(req.params.id);
            
        res.render('productEdit.ejs', {product : productToEdit})
    },
    update: function (req, res) {
        let productId = req.params.id;
        db.Product.update(
            {...req.body},
            {
                where: {id: productId}
            }
        )
        .then(() => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    },
    destroy: function (req, res) {
        let productId = req.params.id;
        db.Product.destroy({where: {id: productId}, force: true}) //Force es para que la accion se ejecute
        .then(() => {
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    }
}

module.exports = productsController;