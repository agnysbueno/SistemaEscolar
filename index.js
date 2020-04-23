const express = require("express");
const alunoRotas = require("./routes/aluno");
const app = express();

app.listen(3000, () => {
    console.log("tô ouvindo!");
});

app.use(alunoRotas);