module.exports = app => {
    const usuariosController = require("../controllers/usuario_controller");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", usuariosController.create);
    // Retrieve all Tutorials
    router.get("/", usuariosController.findAll);
    // Retrieve a single Tutorial with id
    router.get("/:id", usuariosController.findOne);
    // Update a Tutorial with id
    router.put("/:id", usuariosController.update);
    // Delete a Tutorial with id
    router.delete("/:id", usuariosController.delete);
    // Delete all Tutorials
    router.delete("/", usuariosController.deleteAll);
    app.use('/api/usuarios', router);
  };