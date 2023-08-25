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

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o valor do produto: ', function (valorProduto) {
    let preco = valorProduto.replace(",", ".")

    entradaDeDados.question('Informe o código: ', function (codigoInserido){
        let codigo = codigoInserido
    })
})