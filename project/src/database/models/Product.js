module.exports = function(sequelize, dataTypes) {
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
            type: dataTypes.STRING(300),
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        colors: {
            type: dataTypes.STRING(20),
            allowNull: true
        },
        sizes: {
            type: dataTypes.STRING(10),
            allowNull: true
        },
        price: {
            type: dataTypes.NUMBER(10),
            allowNull: false
        },
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    return Product;
}