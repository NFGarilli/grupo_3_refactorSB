const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize;
const { Op } = require("sequelize");

let mainController = {
    index: async function (req, res) {
        await db.Product.findAll()
            .then(products => {
                res.render('main/index', {products});
            })
    },
    cart: (req, res) => {
        res.render('main/product-cart', {products})
    },  
    enConstruction: (req, res) => {
        res.render('main/enConstruction')
    }
}

module.exports = mainController;