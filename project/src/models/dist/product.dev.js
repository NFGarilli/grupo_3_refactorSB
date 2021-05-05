"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//1. Guardar al producto en la DB
//2. Buscar al producto por categoria
//3. Buscar al producto por el id
//4. Editar la informacion del producto
//5. Eliminar a un producto de la DB
var fs = require('fs');

var Product = {
  fileName: './data/productsDB.json',
  getData: function getData() {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
  },
  generateId: function generateId() {
    var allProducts = this.findAll();
    var lastProduct = allProducts.pop();

    if (lastProduct) {
      return lastProduct.id + 1;
    }

    return 1;
  },
  findAll: function findAll() {
    return this.getData();
  },
  findByPk: function findByPk(id) {
    var allProducts = this.findAll();
    var productFound = allProducts.find(function (oneProduct) {
      return oneProduct.id == id;
    });
    return productFound;
  },
  findByField: function findByField(field, text) {
    var allProducts = this.findAll();
    var productFound = allProducts.find(function (oneProduct) {
      return oneProduct[field] === text;
    });
    return productFound;
  },
  create: function create(userData) {
    var allProducts = this.findAll();

    var newProduct = _objectSpread({
      id: this.generateId()
    }, userData);

    allProducts.push(newProduct);
    fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
    return newProduct;
  },
  "delete": function _delete(id) {
    var allProducts = this.findAll();
    var finalProducts = allProducts.filter(function (oneProduct) {
      return oneProduct.id !== id;
    });
    fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
    return true;
  }
};
module.exports = Product;