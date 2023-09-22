/****************************************************
 * OBJETIVO: gerenciar médias de uma universidade
 * DATA: 22/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

// import do arquivo de funções
var calcularMedias = require('./modulo/calculoMedias.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o nome do aluno: ', function (nomeAluno) {
    let nAluno = nomeAluno

    entradaDeDados.question('Insira o sexo do aluno [Feminino - Masculino]: ', function (sexoAluno) {
        let pAluno = sexoAluno
        pAluno = calcularMedias.verificarPronomeAluno(sexoAluno)

        if (pAluno) {
            entradaDeDados.question('Insira o nome do professor: ', function (nomeProf) {
                let nProf = nomeProf

                entradaDeDados.question('Insira o sexo do professor [Feminino - Masculino]: ', function (sexoProf) {
                    let pProf = sexoProf
                    pProf = calcularMedias.verificarPronomeProf(sexoProf)

                    entradaDeDados.question('Qual a disciplina? ', function (nomeDisc) {
                        let disciplina = nomeDisc

                        entradaDeDados.question('Em qual curso? ', function (nomeCurso) {
                            let curso = nomeCurso

                            entradaDeDados.question('Digite a primeira nota [0 - 100]: ', function (nota1) {
                                let n1 = nota1

                                entradaDeDados.question('Digite a segunda nota [0 - 100]: ', function (nota2) {
                                    let n2 = nota2

                                    entradaDeDados.question('Digite a terceira nota [0 - 100]: ', function (nota3) {
                                        let n3 = nota3

                                        entradaDeDados.question('Digite a quarta nota [0 - 100]: ', function (nota4, media) {
                                            let n4 = nota4
                                            let situacaoExame
                                            let exame

                                            media = calcularMedias.calcularMedias(nota1, nota2, nota3, nota4)

                                            let situacao
                                            situacao = calcularMedias.verificarSituacao(media)

                                            if (situacao == 'EM EXAME'){
                                                entradaDeDados.question('Digite a nota de exame: ', function(notaExame){
                                                    exame = calcularMedias.exame(media, notaExame)

                                                    if(exame){
                                                        situacaoExame = calcularMedias.verificarExame(exame)

                                                        situacaoExame = calcularMedias.relatorio(nAluno, nProf, sexoAluno, sexoProf, disciplina, curso, situacao)
                                                        situacaoExame = calcularMedias.relatorioExame(pAluno, n1, n2, n3, n4, notaExame, situacaoExame, media, mediaExame)
                                                    }
                                                })
                                            } else {
                                                situacao = calcularMedias.relatorio(nAluno, nProf, sexoAluno, sexoProf, disciplina, curso, situacao)
                                                situacao = calcularMedias.relatorioAvaliacao(sexoAluno, n1, n2, n3, n4, media)
                                            }
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        }

    })

})