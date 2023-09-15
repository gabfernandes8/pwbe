/***********************************************************
 * Objetivo: arquivo de funções para calcular uma tabuada
 * Data: 01/09/2023
 * Autor: Gabriela Fernandes
 * versão: 1.0
 **********************************************************/

// função para calcular uma tabuada
const calcularTabuada = function(valorTabuada, contadorInicial, contadorFinal){
    // entradas de dados que chegam pelos argumentos 
    let tabuada = String(valorTabuada).replace(',', '.')
    let contInicial = String(contadorInicial).replace(',', '.')
    let contFinal = String(contadorFinal).replace(',', '.')

    let resultado
    let status = false

    // validação para organizar valores (menor e maior)
    if(contFinal < contInicial){
        contFinal = contInicial
        contInicial = contFinal
    }

    if (tabuada == '' || contInicial == '' || contFinal == '') {
        console.log('ERRO: É obrigatório a entrada de todos os valores.')
    } else if(isNaN(tabuada) || isNaN(contInicial) || isNaN(contFinal)){
        console.log('ERRO: É obrigatório a entrada somente de números')
    } else {
        // converte as variáveis em números
        contInicial = Number(contInicial)
        contFinal = Number(contFinal)
        tabuada = Number(tabuada)

    //     // exemplo usando while
    //     while (contInicial <= contFinal){
    //         resultado = tabuada * contInicial
    //         console.log(tabuada + ' x ' + contInicial + ' = ' + resultado)

    //         contInicial++
    //         status = true
    //     }

    // exemplo usando for
    for (; contInicial<=contFinal; contInicial++){
        resultado = tabuada * contInicial
        console.log(tabuada + " x " + contInicial + " = " + resultado)
        status = true
    }
    }

    return status

}

module.exports={
    calcularTabuada
}