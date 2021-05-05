//1. Guardar al producto en la DB
//2. Buscar al producto por categoria
//3. Buscar al producto por el id
//4. Editar la informacion del producto
//5. Eliminar a un producto de la DB
const fs = require('fs');

const Product = {
    fileName: './data/productsDB.json',

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId: function() {
        let allProducts = this.findAll();
        let lastProduct = allProducts.pop();
        if (lastProduct) {
            return lastProduct.id + 1;    
        }
        return 1;
    },

    findAll: function() {
        return this.getData();
    },

    findByPk: function(id) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct.id == id);

        return productFound;
    },

    findByField: function(field, text) {
        let allProducts = this.findAll();
        let productFound = allProducts.find(oneProduct => oneProduct[field] === text);

        return productFound;
    },

    create: function(userData) {
        let allProducts = this.findAll();
        let newProduct = {
            id: this.generateId(),
            ...userData
        }
        allProducts.push(newProduct);
        fs.writeFileSync(this.fileName, JSON.stringify(allProducts, null, ' '));
        return newProduct;
    },

    delete: function(id) {
        let allProducts = this.findAll();
        let finalProducts = allProducts.filter(oneProduct => oneProduct.id != id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalProducts, null, ' '));
        return true;
    }
}

module.exports = Product;