const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("Usuario", {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_completo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        nome_usuario: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        senha: {
            type: Sequelize.STRING(20),
            allowNull: false
        },
        telefone: {
            type: Sequelize.STRING(15),
            allowNull: false
        },
        data_nascimento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        }
    },
    {
        freezeTableName: true,
        createdAt: 'data_criacao',
        updatedAt: 'data_alteracao'
    });
    return Usuario;
};