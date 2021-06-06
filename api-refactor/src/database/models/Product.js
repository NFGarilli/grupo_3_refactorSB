module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true            
        },
        name: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(800),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(200),
            allowNull: true
        },
        colors: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        sizes: {
            type: dataTypes.STRING(100),
            allowNull: true
        },
        price: {
            type: dataTypes.NUMBER(100),
            allowNull: false
        },
    }

    let config = {
        tableName: "Products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    return Product;
}