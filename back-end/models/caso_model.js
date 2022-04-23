const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Caso = sequelize.define("Caso", {
        id_caso: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        status: {
            type: Sequelize.STRING(11),
            allowNull: false
        },
        data_caso: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        tipo_animal: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        raca: {
            type: Sequelize.STRING(30),
            allowNull: false
        },
        nome_animal: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        imagem: {
            type: Sequelize.STRING(2500)
        },
        latitude: {
            type: Sequelize.FLOAT(6),
            allowNull: false
        },
        longitude: {
            type: Sequelize.FLOAT(6),
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        createdAt: 'data_criacao',
        updatedAt: 'data_alteracao'
    });
    return Caso;
};