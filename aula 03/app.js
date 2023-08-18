/*****************************************************************
 * Objetivo: calculr a média de um aluno com base em 4 notas
 * Data: 04/08/2023
 * Autor: Gabriela Fernandes
 * Versão 1.0.0
 ****************************************************************/

/***********************************************************************************
 * Formas de criar variáveis e constantes
 *      var - permite criar uma variável de escopo global, ou seja, irá existir em todo o projeto
 *      let - permite criar uma variável de escopo local (bloco), ou seja, irá existir apenas dentro daquele bloco
 *      const - permite criar uma constant que pode ser de escopo local ou global, sempre utilizamos em situações onde não haverá mudança de conteúdo
 * 
 * 
 * Operadores de comparação
 *      == comparação de conteúdo
 *      < menor
 *      > maior
 *      <= menor ou igual
 *      >= maior ou igual
 *      != diferença
 *      === comparação de conteúdos iguais e tipo de dados iguais. Ex: 1 === 1
 *      !== comparação de conteúdos diferentes e tipos de dados iguais
 *      ==! comparação de conteúdos iguais e tipos de dados diferentes
 * 
 * Operadores Lógicos
 *      E	AND	 &&
 *      OU	OR	 ||
 *      Negação 	NOT     !
 * 
 * Conversão de String para número
 *      parseInt() = converte uma String para números inteiros
 *      parseFloat() = converte uma String para números reais
 *      Number() = converte uma String para número inteiro ou real conforme a necessidade
 **********************************************************************************/

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
    let nome = nomeUsuario

    // entrada de dados da primeira nota
    entradaDeDados.question('Digite sua primeira nota: ', function (nota1Usuario) {
        var nota1 = nota1Usuario.replace(",",".")

        // entrada de dados segunda nota
        entradaDeDados.question('Digite sua segunda nota: ', function (nota2Usuario) {
            var nota2 = nota2Usuario.replace(",",".")

            // entrada de dados da terceira nota
            entradaDeDados.question('Digite sua terceira nota: ', function (nota3Usuario) {
                var nota3 = nota3Usuario.replace(",",".")

                // entrada de dados da quarta nota
                entradaDeDados.question('Digite sua quarta nota: ', function (nota4Usuario) {
                    var nota4 = nota4Usuario.replace(",",".")

                    // validação para entrada de dados vazia
                    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                        console.log('ERRO: É obrigatório inserir todas as notas.')

                        // validação para entrada de dados não numéricos
                        // isNaN() - verifica se a variável não é um numero
                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        console.log('ERRO: É obrigatório a entrada de dados somente com números.')

                        // validação de entrada de números apenas entre 0 e 10.
                    } else if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0 || nota3 > 10 || nota3 < 0 || nota4 > 10 || nota4 < 0) {
                        console.log('ERRO: É obrigatório inserir notas entre 0 e 10.')

                    } else {
                        // exibe uma mensagem no terminal com os dados digitados
                        console.log('Bem-vindo ao aplicativo, ' + nome.toUpperCase())
                        console.log('Primeira nota: ' + nota1)
                        console.log('Segunda nota: ' + nota2)
                        console.log('Terceira nota: ' + nota3)
                        console.log('Quarta nota: ' + nota4)

                        // calcular
                        var media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

                        // toFixed() - permite ajustar a quantidade de casas decimais
                        console.log(nome.toUpperCase() + ', sua média é: ' + media.toFixed(1).replace(".",","))
                    }

                    // encerra o processamento de dados
                    entradaDeDados.close()

                })
            })
        })
    })
})