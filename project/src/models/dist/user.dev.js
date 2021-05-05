"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//1. Guardar al usuario en la DB
//2. Buscar al usuario que se quiere loguear por su email
//3. Buscar al usuario por el id
//4. Editar la informacion del usuario
//5. Eliminar a un usuario de la DB
var fs = require('fs');

var User = {
  fileName: './data/usersDB.json',
  getData: function getData() {
    return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
  },
  generateId: function generateId() {
    var allUsers = this.findAll();
    var lastUser = allUsers.pop();

    if (lastUser) {
      return lastUser.id + 1;
    }

    return 1;
  },
  findAll: function findAll() {
    return this.getData();
  },
  findByPk: function findByPk(id) {
    var allUsers = this.findAll();
    var userFound = allUsers.find(function (oneUser) {
      return oneUser.id === id;
    });
    return userFound;
  },
  findByField: function findByField(field, text) {
    var allUsers = this.findAll();
    var userFound = allUsers.find(function (oneUser) {
      return oneUser[field] === text;
    });
    return userFound;
  },
  create: function create(userData) {
    var allUsers = this.findAll();

    var newUser = _objectSpread({
      id: this.generateId()
    }, userData);

    allUsers.push(newUser);
    fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
    return newUser;
  },
  "delete": function _delete(id) {
    var allUsers = this.findAll();
    var finalUsers = allUsers.filter(function (oneUser) {
      return oneUser.id !== id;
    });
    fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
    return true;
  }
};
module.exports = User;