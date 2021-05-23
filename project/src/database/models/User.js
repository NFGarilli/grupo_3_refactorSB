module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        lastName: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING(300),
            allowNull: false
        },
    }

    let config = {
        tableName: "Users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    return User;
}