/****************************************************
 * OBJETIVO: aprender a trabalhar com estruturas e dados Array e JSON
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

const { stat } = require("fs")

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

    // remove o elemento pelo índice, e sequência de elementos
    listaNomes.splice(2, 1)

    listaNomes.push('André da Silva', 'Ricardo da Silva', 'João da Silva')
    console.table(listaNomes)

    // typeof: retorna o tipo de dados de um elemento
    console.log(typeof(listaNomes[6]))
}

const percorrendoArray =() => {
    let listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    
    // while
    // let cont = 0
    
    // while(cont < listaProdutos.length){
    //     console.log('Nome do produto: ' + listaProdutos[cont])
    //     cont++
    // }



    //for
    for (let cont = 0; cont < listaProdutos.length; cont++){
        console.log('Nome do produto: ' + listaProdutos[cont])
    }


    // foreach
    // listaProdutos.forEach(function(produto, indice){
    //     console.log(indice + 'Nome do produto: ' + produto)
    // })

    // retorna o índice de elementos que foi encontrado
    // caso não exista o item buscado retorna -1
    console.log(listaProdutos.indexOf('Impressora'))

    // retorna verdadeiro ou falso
    console.log(listaProdutos.includes('Mouse'))
}   

const filtrarProduto = (nomeProduto) => {
    let listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']
    let nome = nomeProduto

    return listaProdutos.includes(nome)
}

console.log(filtrarProduto('Mouse'))

percorrendoArray()
//introducaoArray()