const dotenv = require("dotenv");
dotenv.config();

// Dados para a configuracao do banco de dados
module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT, // Qual SGDB sera usado
    pool: {
      max: 5, // Maximo de conexoes consecutivas
      min: 0, // Minimo de conexoes consecutivas
      acquire: 30000, // Tempo maximo (em milisegundos), que a conexao pode ficar ociosa antes de ser liberada
      idle: 10000 // Tempo maximo (em milisegundos), que vai tentar realizar a conexao antes de retornar um erro
    }
};