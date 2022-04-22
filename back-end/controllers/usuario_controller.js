const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nome) {
        res.status(400).send({
            message: "Counteúdo não pode ficar vazio!"
        });
        return;
    }
    // Create a Tutorial
    const usuario = {
        nome: req.body.nome
    };
    // Save Tutorial in the database
    Usuario.create(usuario)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Um erro ocorreu ao tentar criar um usuário!"
        });
    });
};
// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
    Usuario.findAll({ where: condition })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Um erro ocorreu ao tentar recuperar a lista de usuários!"
        });
    });
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Usuario.findByPk(id)
    .then(data => {
    if (data) {
        res.send(data);
    }
    else {
        res.status(404).send({
            message: `Não foi possível achar usuário com id = ${id}.`
        });
    }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao recuperar usuário com id = " + id
        });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Usuario.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Usuário foi atualizado com sucesso!"
            });
        }
        else {
            res.send({
                message: `Não é possível atualizar Usuário com id=${id}.\n Talvez o Usuário não foi encontrado ou o body da requisição está vazio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar Usuário com id = " + id
        });
    });
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Usuario.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Usuário foi removido com sucesso!"
            });
        }
        else {
            res.send({
                message: `Não foi possível remover Usuário com id = ${id}. Talvez o Usuário não exista!`
            });
        }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível remover o usuário com id = " + id
      });
    });
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Usuário.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({ message: `${nums} Usuários foram removidos com sucesso!` });
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Algum erro ocorreu!"
        });
    });
};
