const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("USUARIO", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING
      }
    });
    return Usuario;
};