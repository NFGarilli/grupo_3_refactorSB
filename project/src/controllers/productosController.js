const fs = require('fs');
// const { createBrotliCompress } = require('node:zlib');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDB.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productosController = {
    /*** SHOW ALL PRODUCTS ***/
    index: (req, res) => {
        res.render('product-all', {products, toThousand});
    },
    
    /*** PRODUCT DETAIL ***/
    detail: (req, res) => {
        let product = products.find(product => product.id == req.params.id);
        res.render('product-detail', {products, product, toThousand});
    },

    /*** PRODUCT CREATE VIEW ***/
    create: (req, res) => {
        res.render('product-create-form');
    },

    /*** PRODUCT CREATE STORAGE ***/
    store: (req, res) => {

        let producto = {
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            img: req.body.img,
            category: req.body.category,
            colors: req.body.colors,
            sizes: req.body.sizes,
            price: req.body.price
        }

        let image 

        if (req.file != undefined){
            image = req.file.filename
        } else {
            image = 0
        }

        //FALTA ALMACENARLO EN EL JSON.

        let ids = products.map(p => p.id)
        let newProduct = {
            id: Math.max(...ids) +1,
            img: image,
            ...req.body
        }

        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
        res.redirect('/');
    },

    /*** PRODUCT EDIT VIEW ***/
    edit: (req, res) => {
        let productToEdit = products.find(p => p.id == req.params.id)
        res.render('product-edit-form', {productToEdit, toThousand})
    },

    /*** PRODUC EDIT STORAGE ***/
    update: (req, res) => {
        let id = req.params.id;
        let productToEdit = products.find(p => p.id == id)
        let image
        
        if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.img
		}

        productToEdit = {
			id: productToEdit.id,
			img: image,
            ...req.body
		};

        let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		})

		fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
		res.redirect('/');
    }, 

    /*** PRODUCT DESTROY ***/
    destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	}
}

module.exports = productosController;