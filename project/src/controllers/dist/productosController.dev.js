"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fs = require('fs');

var path = require('path');

var productModel = require('../models/product');

var productsFilePath = path.join(__dirname, '../data/productsDB.json');
var products = productModel.getData();

var toThousand = function toThousand(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

var productosController = {
  /*** SHOW ALL PRODUCTS ***/
  index: function index(req, res) {
    res.render('product-all', {
      products: products,
      toThousand: toThousand
    });
  },
  editList: function editList(req, res) {
    res.render('product-edit-list', {
      products: products
    });
  },

  /*** PRODUCT DETAIL ***/
  detail: function detail(req, res) {
    var product = productModel.findByPk(req.params.id);
    res.render('product-detail', {
      products: products,
      product: product,
      toThousand: toThousand
    });
  },

  /*** PRODUCT CREATE VIEW ***/
  panel: function panel(req, res) {
    res.render('panel');
  },

  /*** PRODUCT CREATE VIEW ***/
  create: function create(req, res) {
    res.render('product-create-form');
  },

  /*** PRODUCT CREATE STORAGE ***/
  store: function store(req, res) {
    var image;

    if (req.file != undefined) {
      image = req.file.filename;
    } else {
      image = "default-image.png";
    }

    var ids = products.map(function (p) {
      return p.id;
    });

    var newProduct = _objectSpread({}, req.body, {
      img: image
    });

    var productCreated = productModel.create(newProduct);
    res.redirect('/product/product-edit-list');
  },

  /*** PRODUCT EDIT VIEW ***/
  edit: function edit(req, res) {
    var productToEdit = productModel.findByPk(req.params.id);
    res.render('product-edit-form', {
      productToEdit: productToEdit,
      toThousand: toThousand
    });
  },

  /*** PRODUC EDIT STORAGE ***/
  update: function update(req, res) {
    var id = req.params.id;
    var productToEdit = productModel.findByPk(id);
    var img;

    if (req.file != undefined) {
      img = req.file.filename;
    } else {
      img = productToEdit.img;
    }

    productToEdit = _objectSpread({
      id: productToEdit.id
    }, req.body, {
      img: img
    });
    var newProducts = products.map(function (product) {
      if (product.id == productToEdit.id) {
        return product = _objectSpread({}, productToEdit);
      }

      return product;
    });
    fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
    res.redirect('/product/product-edit-list');
  },

  /*** PRODUCT DESTROY ***/
  destroy: function destroy(req, res) {
    var id = req.params.id;
    productModel["delete"](id);
  }
};
module.exports = productosController;