const AlunoModel = require("../model/Aluno");

const AlunoController = {
    index: (req, res) => {
        res.send(AlunoModel.listarAlunos())
    },

};

module.exports = AlunoController;