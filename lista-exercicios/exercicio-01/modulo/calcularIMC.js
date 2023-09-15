/***********************************************************
 * Objetivo: arquivo de funções para calcular um IMC
 * Data: 01/09/2023
 * Autor: Gabriela Fernandes
 * versão: 1.0
 **********************************************************/

/*****
 * menor que 18,5 - abaixo do peso
 * entre 18,5 e 24,9 - peso normal
 * entre 25 e 29,9 - acima do peso
 * entre 30 e 34,9 - obesidade I
 * entre 35 e 39,9 - obesidade II
 * maior que 40 - obesidade II 
 *****/

const calculoIMC = (valorPeso, valorAltura) => {
    // entrada de dados que chegam pelos argumentos
    let peso = String(valorPeso).replace(',', '.')
    let altura = String(valorAltura).replace(',', '.')
    let status = false

    let imc = peso / Math.pow(altura, 2)

    // tratativas para possíveis erros
    if (peso == '' || altura == '') {
        console.log('ERRO: é obrigatório inserir todos os valores.')
    } else if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: é obrigatória a entrada somnte de números.')
    } else {
        // converte as variávis em números
        peso = Number(peso)
        altura = Number(altura)
        imc = Number(imc)
    }

    if(imc != undefined){
        return imc
    } else {
        return false
    }

}

const verifIMC = (imc) => {

    let pesoIMC

    // condições
    if (imc < 18.5) {
        pesoIMC = ': Você está abaixo do peso ideal.'
    } else if (imc <= 24.9) {
        pesoIMC = ': Você está no peso ideal!'
    } else if (imc <= 29.9) {
        pesoIMC = ': Você está acima do peso.'
    } else if (imc <= 34.9) {
        pesoIMC = ': Você está com obesidade I.'
    } else if (imc <= 39.9) {
        pesoIMC = ': Você está com obesidade II.'
    } else if (imc <= 40) {
        pesoIMC = ': Você está com obesidade III.'
    }
    
    return pesoIMC
}

module.exports = {
    calculoIMC,
    verifIMC
}