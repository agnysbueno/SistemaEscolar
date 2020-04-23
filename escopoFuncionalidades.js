let alunos = [
    {
    nome: "José",
    boletim: [{
        curso: 'Full Stack',
        notas: [6,7,9],
        faltas: 23,
        dataMatricula: new Date(2020,0,18)
        }
    ]
    },
    {
    nome: "João",
    boletim: [{
        curso: "Back End",
        notas: [8,6,10],
        faltas: 0,
        dataMatricula: new Date(2020,5,22)
        },
        {
        curso: "Front End",
        notas: [6,6,7],
        faltas: 0,
        dataMatricula: new Date(2020,5,22)
        }
    ]
    }
];

const matricularNovoAluno = (nomeAluno, ...cursos) => {
    let novoAluno = {
        nome: nomeAluno,
        boletim: []
    };
    for(let nomeCurso of cursos){
        novoAluno.boletim.push(
            {
            curso: nomeCurso,
            notas: [],
            faltas: 0,
            dataMatricula: new Date()
            }
        );
    };
    alunos.push(novoAluno);
    console.log(`${nomeAluno} está matriculado corretamente :)`)     
};
//matricularNovoAluno("Marissa", "Android", "iOS");

const matricularEmOutroCurso = (aluno, ...cursos) => {
    for(let nomeCurso of cursos){
        aluno.boletim.push(
            {curso: nomeCurso,
            notas: [], 
            faltas: 0,
            dataMatricula: new Date()}
        )
    };
    console.log(`${aluno.nome} agora também está matriculado nos cursos:  ${cursos}`);
};
//matricularEmOutroCurso(alunos[0], "Android", "iOS");

const listarAlunos = (array) => {
    for ( let aluno of array ){
    console.log(`---------------------\n${aluno.nome}`)
        for(let matricula of aluno.boletim){
            console.log(`
    Curso: ${matricula.curso}
    Notas: ${matricula.notas}
    Faltas: ${matricula.faltas}
    Data da matrícula: ${matricula.dataMatricula.getDate()}/${matricula.dataMatricula.getMonth() +1}/${matricula.dataMatricula.getFullYear()}
`)
        };
    }; 
};
//listarAlunos(alunos);

const buscarAluno = (nomeAluno) => {
    let alunoFiltrado = alunos.filter(aluno => aluno.nome.toLowerCase() === nomeAluno.toLowerCase())
    if (alunoFiltrado.length > 0) {
        listarAlunos(alunoFiltrado);
    } else {
        console.log("Ops, achamos nenhum aluno com esse nome. Faça a matrícula!");
    }   
};
//buscarAluno("João");

const aplicarNota = (aluno, nomeCurso, ...notas) =>{
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso.toLowerCase() == nomeCurso.toLowerCase());
    cursoSelecionado[0].notas.push(notas);
    console.log("Todas as notas foram adicionadas!");
};
//aplicarNota(alunos[0],"Full stack", 8, 10);

const aplicarFalta = (aluno, nomeCurso, faltas) =>{
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso.toLowerCase() == nomeCurso.toLowerCase());
    cursoSelecionado[0].faltas+=faltas;
    console.log("Faltas adicionadas com sucesso!");
};
//aplicarFalta(alunos[1],"front END", 4);

const calcularMedia = (aluno, nomeCurso) => {
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso.toLowerCase() == nomeCurso.toLowerCase());
    let soma = cursoSelecionado[0].notas.reduce((pilha,numero) => {
        return pilha+numero;
    });
    const media = soma/cursoSelecionado[0].notas.length;
    console.log(`A média de ${aluno.nome} no curso ${nomeCurso} é: ${media.toFixed(2)}`);
    return media >= 7;
};
//calcularMedia(alunos[0], "Full Stack");

const checarAprovado = (aluno, curso) => {
    let cursoSelecionado = aluno.boletim.filter(matricula => matricula.curso.toLowerCase() == curso.toLowerCase())
    let mediaOk = calcularMedia(aluno, curso)
    let faltasOk = cursoSelecionado[0].faltas <=3;
    if (faltasOk && mediaOk) {
        console.log(`${aluno.nome} foi aprovado no curso ${curso}! Eba :D`);
    } else if (!faltasOk && mediaOk){
        console.log(`${aluno.nome} foi reprovado por excesso de falta no curso ${curso}! :(`);
    } else if (faltasOk && !mediaOk){
        console.log(`${aluno.nome} foi reprovado por média insuficiente no curso ${curso}! :(`);
    } else {
        console.log(`${aluno.nome} foi reprovado por falta e nota no curso ${curso}! :(`);
    };
};
//checarAprovado(alunos[1], "back end");