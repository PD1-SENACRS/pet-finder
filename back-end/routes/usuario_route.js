module.exports = app => {
    const usuariosController = require("../controllers/usuario_controller");
    var router = require("express").Router();

    router.post("/", usuariosController.criarUsuario);
    router.get("/", usuariosController.listarTodosUsuarios);
    router.get("/:id", usuariosController.procurarUsuarioPorId);
    router.put("/:id", usuariosController.atualizarUsuario);
    router.delete("/:id", usuariosController.deletarUsuario);
    /* router.delete("/", usuariosController.deleteAll); */

    app.use('/api/usuarios', router);
};