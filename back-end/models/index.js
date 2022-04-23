const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

// Instanciando Sequelize para iniciar a conexao ao banco de dados
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Indicando os models para criar as
db.usuarios = require("./usuario_model.js")(sequelize, Sequelize);
db.casos = require("./caso_model.js")(sequelize, Sequelize);
db.insercao = require("./insercao_model.js")(sequelize, Sequelize);

// Criando as relações entre tabelas
db.insercao.belongsTo(db.usuarios, { foreignKey: "id_usuario", as: "usuario"});
db.insercao.belongsTo(db.casos, { foreignKey: "id_caso", as: "caso"});
module.exports = db;