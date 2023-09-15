/****************************************************
 * OBJETIVO: fazer uma calculadora de IMC   
 * DATA: 15/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

// import da biblioteca que calcula IMC
var calculoIMC = require('./modulo/calcularIMC.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Insira seu peso: ', function(valorPeso){
    let peso = valorPeso

    entradaDeDados.question('Insira sua altura: ', function(valorAltura){
        let altura = valorAltura

        // chama a função do IMC encaminhando os valores que o usuário digitou
        let imc = calculoIMC.calculoIMC(peso, altura)
        let pesoIMC

        if(imc){
            pesoIMC = calculoIMC.verifIMC(imc)
            console.log('IMC: ' + String(imc.toFixed(2)) + pesoIMC)
        }

        entradaDeDados.close()
    })
})