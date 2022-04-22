const express = require("express");
const cors = require("cors"); // https://developer.mozilla.org/pt-BR/docs/Web/HTTP/CORS
const app = express();
const dotenv = require("dotenv");
const db = require("./models");

dotenv.config()

var corsOptions = { origin: "http://localhost:8081" };
app.use(cors(corsOptions));
app.use(express.json()); // parse requests of content-type - application/json
app.use(express.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Incluindo as rotas da API
require("./routes/usuario_route.js")(app);

// "Ouvindo" os requests na API
app.listen(process.env.API_PORT, () => {
  console.log(`Server is running on port ${process.env.API_PORT}.`);
});