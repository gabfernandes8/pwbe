/*****************************************************************
 * Objetivo: Manipular entrada e saída de dados para o usuário.
 * Data: 04/08/2023
 * Autor: Gabriela Fernandes
 * Versão: 1.0
 ****************************************************************/

// import da biblioteca de entrada de dados via teclado
var readline = require('readline')

// criando um objeto entradaDeDados para ser uma referência da biblioteca READLINE
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

    // entrada de dados da idade
    entradaDeDados.question('Digite sua idade: ', function (idadeUsuario) {
        var idade = idadeUsuario

        // entrada de dados do email
        entradaDeDados.question('Digite seu e-mail: ', function (emailUsuario) {
            var email = emailUsuario

            // entrada de dados do telefone
            entradaDeDados.question('Digite seu telefone: ', function (telUsuario) {
                var tel = telUsuario

                // exibe uma mensagem no terminal com o nome digitado
                console.log('Bem-vindo ao aplicativo, ' + nome)
                console.log('A idade informada foi ' + idade)
                console.log('O e-mail informado foi ' + email)
                console.log('O telefone informado foi ' + tel)

                // encerra o processamento de dados
                entradaDeDados.close()
            })
        })
    })
})
