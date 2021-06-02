const productModel = require('../database/models/Product');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.join(__dirname, '../data/productsDB.json');
// const products = productModel.getData();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let productosController = {
    /*** SHOW ALL PRODUCTS ***/
    index: async function (req, res) {
        await db.Product.findAll()
            .then(products => {
                res.render('product/product-all', {products, toThousand});
            })
    },

    editList: async function (req, res) {
        await db.Product.findAll()
            .then(products => {
                res.render('product/product-edit-list', {products});
            })
    },
    
    /*** PRODUCT DETAIL ***/
    detail: async function (req, res) {
        let products = await db.Product.findAll()

        await db.Product.findByPk(req.params.id)
            .then( product => {
                res.render('product/product-detail', {product, products, toThousand});
            })
    },

    /*** PRODUCT CREATE VIEW ***/
    panel: async function  (req, res) {
        res.render('product/panel');
    },

    /*** PRODUCT CREATE VIEW ***/
    create: async function (req, res) {
        res.render('product/product-create-form');
    },

    /*** PRODUCT CREATE STORAGE ***/
    store: async function (req, res) {
        let image 

        if (req.file != undefined){
            image = req.file.filename
        } 
        else {
            // image = "/images/product-images/default-image.png"
        }

        await db.Product.create({
            name: req.body.name,
            description: req.body.description,
            img: image,
            gender: req.body.gender,
            category: req.body.category,
            color: req.body.color,
            sizes: req.body.sizes,
            price: req.body.price
        })

        return res.redirect('/product/product-edit-list');
    },

    /*** PRODUCT EDIT VIEW ***/
    edit: async function (req, res) {
        let productToEdit = await db.Product.findByPk(req.params.id);
        res.render('product/product-edit-form', {productToEdit, toThousand})
    },

    /*** PRODUCT EDIT STORAGE ***/
    update: async function (req, res) {
        await db.Product.update(
            {...req.body},
            {
                where: {id: req.params.id}
            }
        );

        res.redirect('/product/product-edit-list');
    }, 

    /*** PRODUCT DESTROY ***/
    destroy: async function (req, res) {
		let productToDelete = await db.Product.findByPk(req.params.id);
		await productToDelete.destroy();
        res.redirect('/product/product-edit-list');
	}
}

module.exports = productosController;