module.exports = app => {
    const usuarioController = require("../controllers/usuario_controller");
    var router = require("express").Router();

    router.post("/", usuarioController.criarUsuario);
    router.get("/", usuarioController.listarTodosUsuarios);
    router.get("/:id", usuarioController.procurarUsuarioPorId);
    router.put("/:id", usuarioController.atualizarUsuario);
    router.delete("/:id", usuarioController.deletarUsuario);
    /* router.delete("/", usuarioController.deletarTodosUsuarios); */

    app.use('/api/usuarios', router);
};