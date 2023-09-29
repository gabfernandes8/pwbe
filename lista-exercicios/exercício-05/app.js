/****************************************************
 * OBJETIVO: gerenciar números ímpares e pares
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

var gerenciarNumeros = require('./modulo/impares-pares.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira o número inicial [0 - 500]: ', function(numeroInicial){
    let nInicial = numeroInicial

    entradaDeDados.question('Insira o número final [100 - 1000]: ', function(numeroFinal){
        let nFinal = numeroFinal

        entradaDeDados.question('Escolha como quer separar os números: \n[1 - Pares] \n[2 - Ímpares] \n[3 - Ambos] ', function(opcaoUsuario){
            let opcao = opcaoUsuario

            gerenciarNumeros.verifValores(nInicial, nFinal, opcao)
        })
    })
})