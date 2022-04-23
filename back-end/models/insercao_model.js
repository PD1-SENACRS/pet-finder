const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Insercao = sequelize.define("Insercao", {
        id_unico: {
            type: DataTypes.INTEGER,
            auto_increment: true,
            primaryKey: true
        }
        /* id_caso: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            primaryKey: true
        } */
    },
    {
        freezeTableName: true,
        createdAt: 'data_criacao',
        updatedAt: 'data_alteracao'
    });
    return Insercao;
};