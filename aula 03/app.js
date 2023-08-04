/*****************************************************************
 * Objetivo: calculr a média de um aluno com base em 4 notas
 * Data: 04/08/2023
 * Autor: Gabriela Fernandes
 * Versão 1.0.0
 ****************************************************************/

// import da biblioteca de READLINE
var readline = require('readline')

// cria o elemento de entrada de dados para digitação com o usuário
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// função de callback que permite apresentar uma mensagem no terminal, e captar a digitação do usuário
// Obs: o dado digitado chegará para dentro da função através do seu argumento (nomeUsuario)

// entrada de dados do nome
entradaDeDados.question('Digite seu nome: ', function (nomeUsuario) {
    // recebe o nome digitado
    var nome = nomeUsuario

    // entrada de dados da primeira nota
    entradaDeDados.question('Digite sua primeira nota: ', function (nota1Usuario) {
        var nota1 = Number(nota1Usuario, 10)

        // entrada de dados segunda nota
        entradaDeDados.question('Digite sua segunda nota: ', function (nota2Usuario) {
            var nota2 = Number(nota2Usuario, 10)

            // entrada de dados da terceira nota
            entradaDeDados.question('Digite sua terceira nota: ', function (nota3Usuario) {
                var nota3 = Number(nota3Usuario, 10)

                // entrada de dados da quarta nota
                entradaDeDados.question('Digite sua quarta nota: ', function (nota4Usuario) {
                    var nota4 = Number(nota4Usuario, 10)

                    // exibe uma mensagem no terminal com os dados digitados
                    console.log('Bem-vindo ao aplicativo, ' + nome)
                    console.log('Primeira nota: ' + nota1)
                    console.log('Segunda nota: ' + nota2)
                    console.log('Terceira nota: ' + nota3)
                    console.log('Quarta nota: ' + nota4)

                    var media = (nota1 + nota2 + nota3 + nota4) / 4
                    console.log(nome + ', sua média é: ' + media)

                    // encerra o processamento de dados
                    entradaDeDados.close()

                })
            })
        })
    })
})