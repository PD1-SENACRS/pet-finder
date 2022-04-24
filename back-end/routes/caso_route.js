module.exports = app => {
    const casoController = require("../controllers/caso_controller");
    var router = require("express").Router();

    router.post("/", casoController.criarCaso);
    router.get("/", casoController.listarTodosCasos);
    router.get("/:id", casoController.procurarCasoPorId);
    router.put("/:id", casoController.atualizarCaso);
    router.delete("/:id", casoController.deletarCaso);
    /* router.delete("/", casoController.deletarTodosCasos); */

    app.use('/api/casos', router);
};