/****************************************************
 * OBJETIVO: gerenciar o cálculo de fatoriais
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

var gerenciarFatorial = require('./modulo/fatorial.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira um número para ser fatorado: ', function(valorFatorado){
    let valor = valorFatorado

    gerenciarFatorial.calcularFatorial(valor)
})