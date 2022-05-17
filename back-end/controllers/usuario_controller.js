const { QueryTypes } = require('sequelize');
const db = require("../models");
const Usuario = db.usuarios;
const Op = db.Sequelize.Op;

// Criar um novo Usuario
exports.criarUsuario = (req, res) => {
    /* // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Counteúdo não pode ficar vazio!"
        });
        return;
    } */

    // Cria uma instancia de Usuario para salvar suas informacoes
    const usuario = {
        nome_completo: req.body.nome_completo,
        nome_usuario: req.body.nome_usuario,
        senha: req.body.senha,
        telefone: req.body.telefone,
        data_nascimento: req.body.data_nascimento
    };

    // Salva o Usuario no banco de dados
    Usuario.create(usuario)
    .then(data => {
        res.status(201).send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Um erro ocorreu ao tentar criar um usuário!"
        });
    });
};

// Recupera todos Usuarios do banco de dados
exports.listarTodosUsuarios = (req, res) => {
    var queryString = `SELECT * FROM "Usuario"`;

    Usuario.sequelize.query(queryString)
    .then(([results, metadata]) => {
        res.status(200).send(results);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Um erro ocorreu ao tentar recuperar a lista de usuários!"
        });
    });
};

// Procura um unico Usuario baseado no seu ID
exports.procurarUsuarioPorId = (req, res) => {
    const id = req.params.id;
    var stringQuery = `SELECT * FROM "Usuario" WHERE id_usuario = $id`;

    Usuario.sequelize.query(stringQuery, { bind: {id}})
    .then(([results, metadata]) => {
        if (results != '') {
            res.status(200).send(results);
        }
        else {
            res.status(404).send({
                message: `Não foi possível achar um usuário com este ID.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao recuperar um usuário este ID"
        });
    });
};

// Atualiza um Usuario atraves do ID na requisicao
exports.atualizarUsuario = (req, res) => {
    const id = req.params.id;
    Usuario.update(req.body, {
        where: { id_usuario: id }
    })
    .then(num => {
        if (num == 1) {
            res.status(200).send({
                message: "Usuário foi atualizado com sucesso!"
            });
        }
        else {
            res.status(404).send({
                message: `Não é possível atualizar um usuário com este ID, talvez o usuário não foi encontrado ou o body da requisição está vazio!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Erro ao atualizar usuário com este ID"
        });
    });
};

// Deleta um Usuario com o respectivo ID na requisicao
exports.deletarUsuario = (req, res) => {
    const id = req.params.id;
    var queryString = `DELETE FROM "Usuario" WHERE id_usuario = $id`;

    Usuario.sequelize.query(queryString, {bind: {id}})
    .then(([results, metadata]) => {
        if (metadata.rowCount == 1) {
            res.status(200).send({
                message: "Usuário foi removido com sucesso!"
            });
        }
        else {
            res.status(404).send({
                message: `Não foi possível remover o usuário com este id, talvez o usuário não exista!`
            });
        }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível remover o usuário!"
      });
    });
};

// Realiza a autenticação do acesso do usuário
exports.realizarLogin = (req, res) => {
    const usuario = req.body.nome_usuario;
    const senha = req.body.senha;

    var queryString = `SELECT * FROM "Usuario" WHERE nome_usuario = $usuario AND senha = $senha FETCH FIRST ROW ONLY`

    Usuario.sequelize.query(queryString, {bind: {usuario, senha}})
    .then(([results, metadata]) => {
        // Necessário diferenciar pois sempre retornar um array vazio caso não encontre resultado
        if(results != ''){
            res.status(200).send({
                message: "Usuário autenticado!"
            });
        }
        else{
            res.status(404).send({
                message: "Usuário não encontrado!"
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Ocorreu um erro ao realizar o login"
        });
    })
}

// Deletar todos Usuarios do banco de dados [VERIFICAR SE VALE A PENA]
/* exports.deletarTodosUsuarios = (req, res) => {
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
}; */