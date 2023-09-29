/****************************************************
 * OBJETIVO: aprender a trabalhar com estruturas e dados Array e JSON
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

// [ ] => representa a estrutura array
// { } => representa a estrutura JSON

// criando array manual
const introducaoArray = () => {
    let listaNomes = ['Arthur', 'Suzi', 'André', 'Thauanny', 'Raica', 'Julia']

    // exibe os dados do array em forma de tabela
    console.table(listaNomes.length)

    // adiciona elementos novos no fim da lista
    listaNomes.push('Roberto')

    // adiciona elementos novos no início da lista
    listaNomes.unshift('Ricardo')

    // remove o último elemento do array
    listaNomes.pop()

    // remove o elemento do início
    listaNomes.shift()
    console.table(listaNomes)
}

introducaoArray()