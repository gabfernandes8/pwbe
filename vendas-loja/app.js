/*****************************************************************
 * Objetivo: Auxilia no processo de venda de uma lojas
 * Data: 25/08/2023
 * Autor: Gabriela Fernandes
 * Versão 1.0.0
 ****************************************************************/

// código 1: à vista, com 8% de desconto
// código 2: à vista no cartão, com 4% de desconto
// código 3: em 2x, preço normal sem juros
// código 4: em 4x, preço acrescido de 8%
// qualquer outro: opção inválida

// import da biblioteca de calculosMatematicos
var calculoValor = require('./modulo/calculoValor.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o valor do produto: ', function (valorProduto) {
    let preco = valorProduto.replace(",", ".")

    entradaDeDados.question('Informe o código: ', function (codigoInserido){
        let codigo = codigoInserido

        // validação para entrada de dados vazia
        if (preco == '' || codigo == ''){
            console.log('ERRO: é necessário informar um valor ou um código.')
        } else if (isNaN(codigo) || isNaN(preco)) {
        // isNaN() - verifica se a variável não é um numero

        console.log('ERRO: é obrigatório informar somente números.')
        } else if (codigo > 4 || codigo < 1){
            console.log('ERRO: é obrigatório inserir um código de 1 a 4.')
        }

        msg = calculoValor.calcular(valorProduto, codigoInserido)

        if(msg){
            console.log(msg)
        }
    })
})