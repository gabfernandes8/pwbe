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

            if (valor1 == '' || valor2 == '') {
                console.log('ERRO: É necessário a entrada de dados nos valores.')
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERRO: É obrigatório a entrada somente de números.')
            }

            valor1 = Number(valor1)
            valor2 = Number(valor2)

            // if (operacao == 'SOMAR') {
            //     resultado = valor1 + valor2

            // } else if (operacao == 'SUBTRAIR') {
            //     resultado = valor1 - valor2

            // } else if (operacao == 'MULTIPLICAR') {
            //     resultado = valor1 * valor2

            // } else if (operacao == 'DIVIDIR') {
            //     if(valor2 == 0){
            //         console.log('ERRO: Não é possível realizar uma divisão por 0')
            //     } else {
            //         resultado = valor1 / valor2 
            //     }
            // } else{
            //     console.log('ERRO: É obrigatório escolher apenas as operações listadas')
            // }

            

            if (resultado != undefined) {
                console.log(resultado)
            }

        })
    })
})

// modelo tradicional de criar funções
function calculadora(numero1, numero2, tipoCalculo) {

    // recebendo os valores dos argumentos da função, em variáveis locis
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado

    // VERSÃO 2.0 - utilizando switch case
    switch (operacao) {
        case "SOMAR":
        case "+":
            resultado = valor1 + valor2
            break

        case "SUBTRAIR":
        case "-":
            resultado = valor1 - valor2
            break

        case "MULTIPLICAR":
        case "*":
            resultado = valor1 * valor2
            break

        case "DIVIDIR":
        case "/":
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar uma divisão por 0')
            } else {
                resultado = valor1 / valor2
            }
            break

        default:
            console.log('ERRO: É obrigatório escolher apenas as operações listadas')
            break
    }
}