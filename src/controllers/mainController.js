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
    cart: async function (req, res) {
        await db.Product.findAll()
            .then(products => {
                res.render('main/product-cart', {products})
            })
    },  
    enConstruction: (req, res) => {
        res.render('main/enConstruction')
    },
    guiaTalles: (req, res) => {
        res.render('main/guiaTalles')
    },
    encontranos: (req, res) => {
        res.render('main/encontranos')
    },
    team: (req, res) => {
        res.render('main/team')
    },
    guiaTablas: (req, res) => {
        res.render('main/guiaTablas')
    },
    comunicate: (req, res) => {
        res.render('main/comunicate')
    },
}

module.exports = mainController;