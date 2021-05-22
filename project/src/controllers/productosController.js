const fs = require('fs');
const path = require('path');
const productModel = require('../models/product');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = productModel.getData();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productosController = {
    /*** SHOW ALL PRODUCTS ***/
    index: (req, res) => {
        res.render('product/product-all', {products, toThousand});
    },

    editList: (req, res) => {
        res.render('product/product-edit-list', {products});
    },
    
    /*** PRODUCT DETAIL ***/
    detail: (req, res) => {
        let product = productModel.findByPk(req.params.id);
        res.render('product/product-detail', {products, product, toThousand});
    },

    /*** PRODUCT CREATE VIEW ***/
    panel: (req, res) => {
        res.render('product/panel');
    },

    /*** PRODUCT CREATE VIEW ***/
    create: (req, res) => {
        res.render('product-create-form');
    },

    /*** PRODUCT CREATE STORAGE ***/
    store: (req, res) => {
        let image 

        if (req.file != undefined){
            image = req.file.filename
        } else {
            image = "default-image.png"
        }

        let ids = products.map(p => p.id)
        let newProduct = {
            ...req.body,
            img: image
        }

        let productCreated = productModel.create(newProduct);
        res.redirect('product/product-edit-list');
    },

    /*** PRODUCT EDIT VIEW ***/
    edit: (req, res) => {
        let productToEdit = productModel.findByPk(req.params.id);
        res.render('product/product-edit-form', {productToEdit, toThousand})
    },

    /*** PRODUCT EDIT STORAGE ***/
    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = productModel.findByPk(id);
        let img
        
        if(req.file != undefined){
			img = req.file.filename
		} else {
			img = productToEdit.img
		}

        productToEdit = {
			id: productToEdit.id,
            ...req.body,
            img: img
		};

        let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/product/product-edit-list');
    }, 

    /*** PRODUCT DESTROY ***/
    destroy : (req, res) => {
		let id = req.params.id;
		productModel.delete(id);
        res.redirect('/product/product-edit-list');
	}
}

module.exports = productosController;