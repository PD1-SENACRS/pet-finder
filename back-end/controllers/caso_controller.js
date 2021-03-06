const db = require("../models");
const Caso = db.casos;
const Op = db.Sequelize.Op;

// Criar um novo Caso
exports.criarCaso = (req, res) => {
    /* // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Counteúdo não pode ficar vazio!"
        });
        return;
    } */

    // Cria uma instancia de Caso para salvar suas informacoes
    const caso = {
        status: req.body.status,
        data_caso: req.body.data_caso,
        tipo_animal: req.body.tipo_animal,
        raca: req.body.raca,
        nome_animal: req.body.nome_animal,
        imagem: req.body.imagem,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        id_usuario: req.body.id_usuario, // TODO: MUDAR ESSA PARTE
    };

    // Salva o Caso no banco de dados
    Caso.create(caso)
    .then(data => {
        res.stauts(201).send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Um erro ocorreu ao tentar criar um caso!"
        });
    });
};

// Recupera todos Casos do banco de dados
exports.listarTodosCasos = (req, res) => {
    var stringQuery = `SELECT * FROM "Caso"`;

    Caso.sequelize.query(stringQuery)
    .then(([results, metadata]) => {
        res.status(200).send(results);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Um erro ocorreu ao tentar recuperar a lista de casos!"
        });
    });
};

// Procura um unico Caso baseado no seu ID
exports.procurarCasoPorId = (req, res) => {
    const id = req.params.id;
    var stringQuery = `SELECT * FROM "Caso" WHERE id_caso = $id`;

    Caso.sequelize.query(stringQuery, {bind: {id}})
    .then(([results, metadata]) => {
        if (metadata.rowCount == 1) {
            res.status(200).send(results);
        }
        else {
            res.status(404).send({
                message: `Não foi possível achar um caso com este id!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao recuperar caso com este id"
        });
    });
};

exports.procurarCasoPorUsuario = (req, res) => {
    const id_usuario = req.params.id;
    var queryString = `SELECT * FROM "Caso" WHERE id_usuario = $id_usuario`;

    Caso.sequelize.query(queryString, {bind: {id_usuario}})
    .then(([results, metadata]) => {
        if(metadata.rowCount > 0){
            res.status(200).send(results);
        }
        else{
            res.status(404).send({
                message: "Não existe casos para este usuário!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Um erro ocorreu ao tentar recuperar a lista de casos!"
        });
    });
};

// Atualiza um Caso atraves do ID na requisicao
exports.atualizarCaso = (req, res) => {
    const id = req.params.id;
    Caso.update(req.body, {
        where: { id_caso: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Caso foi atualizado com sucesso!"
            });
        }
        else {
            res.send({
                message: `Não é possível atualizar um caso com este id, talvez o caso não foi encontrado ou o body da requisição está vazio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar o caso com este id!"
        });
    });
};

// Deleta um Caso com o respectivo ID na requisicao
exports.deletarCaso = (req, res) => {
    const id = req.params.id;
    var queryString = `DELETE FROM "Caso" WHERE id_caso = $id`;

    Caso.sequelize.query(queryString, {bind: {id}})
    .then(([results, metadata]) => {
        if (metadata.rowCount == 1) {
            res.status(200).send({
                message: "Caso foi removido com sucesso!"
            });
        }
        else {
            res.status(404).send({
                message: `Não foi possível remover o caso com este id, talvez o caso não exista!`
            });
        }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível remover o caso com este id"
      });
    });
};

// Deletar todos Casos do banco de dados [VERIFICAR SE VALE A PENA]
/* exports.deletarTodosCasos = (req, res) => {
    Caso.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Casos foram removidos com sucesso!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algum erro ocorreu!"
        });
    });
}; */