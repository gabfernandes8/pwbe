/*****************************************************************
 * Objetivo: Fazer uma calculadora
 * Data: 11/08/2023
 * Autor: Gabriela Fernandes
 * Versão 1.0.0
 ****************************************************************/

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Primeiro número: ', function (numero1) {
    let n1 = numero1.replace(",", ".")

    entradaDeDados.question('Segundo número: ', function (numero2) {
        let n2 = numero2.replace(",", ".")

        entradaDeDados.question('Qual operação deseja efetuar? (+, -, /, *) : \n', function (sinal) {
            let operacao
            
            n1 = Number(n1)
            n2 = Number(n2)

            // validação para entrada de dados vazia
            if (n1 == '' || n2 == '') {
                console.log('ERRO: É obrigatório inserir os dois números.')

                // validação para entrada de dados não numéricos
                // isNaN() - verifica se a variável não é um numero
            } else if (isNaN(n1) || isNaN(n2)) {
                console.log('ERRO: É obrigatório a entrada de dados somente com números.')

            } else {
                switch (sinal) {

                    case "+":
                        operacao = n1 + n2
                        console.log(n1 + " + " + n2 + ' = ' + operacao)
                        break
    
                    case "-":
                        operacao = n1 - n2
                        console.log(n1 + " - " + n2 + ' = ' + operacao)
                        break
    
                    case "/":
                        operacao = n1 / n2
                        console.log(n1 + " / " + n2 + ' = ' + operacao)
                        break
    
                    case "*":
                        operacao = n1 * n2
                        console.log(n1 + " * " + n2 + ' = ' + operacao)
                        break

                    default:
                        console.log('É necessário definir uma operação válida.')
                }
            }

            entradaDeDados.close()

        })
    })
})