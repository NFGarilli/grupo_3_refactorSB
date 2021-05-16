module.exports = function( sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        img: {

        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(20),
            allowNull: false
        },
        sizes: {
            type: dataTypes.STRING(10),
            allowNull: false
        },
        price: {
            type: dataTypes.NUMBER(10),
            allowNull: false
        },
    }
}
let config = {
    tableName: "product",
    timestamps: false
}

let Product = sequelize.define(alias, cols, config);

return Product;