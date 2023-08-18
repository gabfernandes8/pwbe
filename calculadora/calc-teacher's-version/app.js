/*****************************************************************
 * Objetivo: Fazer uma calculadora (teacher's version)
 * Data: 11/08/2023
 * Autor: Gabriela Fernandes
 * Versão 1.0.0
 ****************************************************************/

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o primeiro número: ', function (numero1) {
    let valor1 = numero1.replace(",", ".")

    entradaDeDados.question('Digite o segundo valor: ', function (numero2) {
        let valor2 = numero2.replace(",", ".")

        entradaDeDados.question('Escolha uma opção de cálculo: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: ', function (opcao) {
            let operacao = opcao.toUpperCase()
            let resultado

            valor1 = Number(valor1)
            valor2 = Number(valor2)

            if (operacao == 'SOMAR') {
                resultado = valor1 + valor2

            } else if (operacao == 'SUBTRAIR') {
                resultado = valor1 - valor2

            } else if (operacao == 'MULTIPLICAR') {
                resultado = valor1 * valor2

            } else if (operacao == 'DIVIDIR') {
                resultado = valor1 / valor2
            }

            console.log(resultado)

        })
    })
})