/****************************************************
 * OBJETIVO: arquivo de funções para calcular tabuadas
 * DATA: 22/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

const criarTabuada = (contadorInicial, contadorFinal, valorTabuada) => {
    let nInicial = contadorInicial
    let nFinal = contadorFinal
    let tabuada = valorTabuada
    
    console.log('-------------------')
    console.log('Tabuada: ' + tabuada)
    console.log('')

    while (nInicial <= nFinal){
        let resultado = tabuada * nInicial
        
        console.log(tabuada + ' x ' + nInicial + ' = ' + resultado)
        nInicial++
    }
    return true
}

const calcularTabuada = (contadorInicial, contadorFinal, tabuadaInicial, tabuadaFinal) => {
    let nInicial = String(contadorInicial).replace(',', '.')
    let nFinal = String(contadorFinal).replace(',', '.')
    let tabInicial = String(tabuadaInicial).replace(',', '.')
    let tabFinal = String(tabuadaFinal).replace(',', '.')
    let status = false

    if (Number(tabFinal) < Number(tabInicial)){
        tabFinal = String(tabuadaInicial).replace(',', '.')
        tabInicial = String(tabuadaFinal).replace(',', '.')
    }

    if (Number(nFinal) < Number(nInicial)){
        nFinal = String(contadorInicial).replace(',', '.')
        nInicial = String(contadorFinal).replace(',', '.')
    }

    if (nInicial == '' || nFinal == '' || tabInicial == '' || tabFinal == ''){
        console.log('ERRO: É obrigatório a entrada de todos os valores.')
        return false

    } else if (isNaN(nInicial) || isNaN(nFinal) || isNaN(tabInicial) || isNaN(tabFinal)){
        console.log('ERRO: É obrigatório a entrada somente de números.')
        return false

    } else if (tabInicial < 1 || tabFinal > 100 || tabInicial > 100 || tabFinal < 1){
        console.log('ERRO: É obrigatório escolher tabuadas apenas entre 2 e 100.')
        return false

    } else if (nInicial < 1 || nFinal > 50 || nInicial > 50 || nFinal < 1){
        console.log('ERRO: É obrigatório escolher valores entre 1 e 50.')
        return false
    }

    let contagemInicial = nInicial

    while (nInicial < nFinal){
        criarTabuada(contagemInicial, contadorFinal, tabuadaInicial)
        tabuadaInicial++
        nInicial++

        status = true
    }

}
module.exports={
    criarTabuada,
    calcularTabuada
}