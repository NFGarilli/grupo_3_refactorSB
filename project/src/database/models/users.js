module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        admin: {
            type: dataTypes.INTEGER(1),
            allowNull: false
        },
    }

    let config = {
        tableName: "Users",
        timestamps: false
    }

    let Users = sequelize.define(alias, cols, config);

    return Users;
}