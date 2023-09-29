/****************************************************
 * OBJETIVO: arquivo de funções para calcular fatoriais
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

const calcularFatorial = (valorFatorado) => {

    let fatorial = String(valorFatorado).replace(',', '.')

    if (valorFatorado == ''){
        console.log('ERRO: É obrigatório a entrada de um valor.')
        return false
    } else if (isNaN(valorFatorado)){
        console.log('ERRO: É obrigatório a entrada somente de números.')
        return false
    } else if (valorFatorado == 0){
        console.log('ERRO: Não existe fatorial de 0.')
        return false
    } else if (valorFatorado == 1){
        console.log('ERRO: Não é possível calcular a fatorial de 1.')
        return false
    } else if (valorFatorado < 0){
        console.log('ERRO: É impossível calcular uma fatorial de números negativos.')
    }

    fatorial = 

}