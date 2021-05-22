const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let mainController = {
    index: (req, res) => {
        res.render('main/index', {products});
    },
    cart: (req, res) => {
        res.render('main/product-cart', {products})
    },  
    enConstruction: (req, res) => {
        res.render('main/enConstruction')
    }
}

module.exports = mainController;