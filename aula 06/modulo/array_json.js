/****************************************************
 * OBJETIVO: aprender a trabalhar com estruturas e dados Array e JSON
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

const { stat } = require("fs")
const { json } = require("stream/consumers")

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
    console.log(typeof (listaNomes[6]))
}

const percorrendoArray = () => {
    let listaProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    // while
    // let cont = 0

    // while(cont < listaProdutos.length){
    //     console.log('Nome do produto: ' + listaProdutos[cont])
    //     cont++
    // }



    //for
    for (let cont = 0; cont < listaProdutos.length; cont++) {
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

    let status = false

    // return listaProdutos.includes(nome)

    listaProdutos.forEach(function (produto) {
        if (produto.toUpperCase() == nome.toUpperCase()) {
            status = true
        }
    })

    return status
}

const manipulandoArrayJson = () => {

    /*****************************************************************
     * existem diversos tipos de dados para integração de tecnologias
     * exemplo 1 - XML <atributo> valor </atributo>
     * exemplo 2 - JSON {atributo: valor}
     ****************************************************************/

    // criando um JSON manual
    let contato = { nome: 'José da Silva', telefone: '40028922', email: 'jose@gmail.com' }
    let contato2 = { nome: 'Arthur Lopes', telefone: '959449434', email: 'arthurlanches@gmail.com' }
    let contato3 = { nome: 'Gabriela Fernandes', telefone: '972870187', email: 'gabriela@gmail.com' }

    let arrayContatos = [contato, contato2, contato3]

    // criando novos atributos de forma dinâmica
    contato.celular = '972870187'
    contato.data_nasc = '1977-08-08'
    contato.idade = '39'

    // para extrair conteúdo de cada atributo do JSON
    // console.log('Nome: ' + contato2.nome)
    // console.log('Email: ' + contato2.email)

    // console.log(arrayContatos)

    // console.log(arrayContatos[0])
    // console.log(arrayContatos[1])
    // console.log(arrayContatos[1].nome)

    // percorrendo array e json
    arrayContatos.forEach(function (dados) {
        console.log('Nome: ' + dados.nome)
        console.log('Email: ' + dados.email)
        console.log('Telefone: ' + dados.email)
        console.log('')
    })
}

const produtosArrayJson = () => {
    let listaCores = [
        { id: 1, nome: 'Branco' },
        { id: 2, nome: 'Preto' },
        { id: 3, nome: 'Cinza' },
        { id: 4, nome: 'Rosa' },
        { id: 5, nome: 'Vermelho' },
        { id: 6, nome: 'Azul' }
    ]

    let listaMarca = [
        { id: 1, nome: 'Dell' },
        { id: 2, nome: 'Lenovo' },
        { id: 3, nome: 'Apple' },
        { id: 4, nome: 'Logitech' },
        { id: 5, nome: 'Positivo' },
        { id: 6, nome: 'Multilaser' },
        { id: 7, nome: 'Razer' }
    ]

    let listaCategorias = [
        { id: 1, nome: 'Hardware', descricao: 'Hardware' },
        { id: 2, nome: 'Periférico', descricao: 'Periférico' },
        { id: 3, nome: 'Gamer', descricao: 'Gamer' },
        { id: 4, nome: 'Acessórios', descricao: 'Acessórios' },
    ]

    // cria um objeto do tipo JSON para o array de produtos
    let JSONProdutos = {}

    // cria um objeto do tipo array para guardar os produtos
    let ArrayProdutos = []

    // objeto para criar os produtos
    let produto1 = {
        id: 1, 
        nome: 'Mouse', 
        descricao: 'Mouse optico com fio', 
        categoria: listaCategorias[1],
        marca: listaMarca[0],
        cor:[
            listaCores[0],
            listaCores[1],
            listaCores[2]
        ]
    }

    let produto2 = {
        id: 2, 
        nome: 'Teclado', 
        descricao: 'Teclado com fio padrão ABNT', 
        categoria: listaCategorias[1],
        marca: listaMarca[3],
        cor: listaCores
    }

    let produto3 = {
        id: 3, 
        nome: 'Headset', 
        descricao: 'Headset gamer com led colorido', 
        categoria: listaCategorias[3],
        marca: listaMarca[6],
        cor: [
            listaCores[0],
            listaCores[1],
            listaCores[2]
        ]
    }

    let produto4 = {
        id: 4, 
        nome: 'Monitor', 
        descricao: 'Monitor 20"5', 
        categoria: listaCategorias[1],
        marca: listaMarca[0],
        cor: [
            listaCores[0],
            listaCores[1],
        ]
    }

    let produto5 = {
        id: 5, 
        nome: 'Gabinete', 
        descricao: 'Gabinete com led colorido', 
        categoria: listaCategorias[1],
        marca: listaMarca[0],
        cor: [
            listaCores[0],
            listaCores[1],
        ]
    }
    

    // adicionando os produtos no array de produtos
    ArrayProdutos.push(produto1)
    ArrayProdutos.push(produto2)
    ArrayProdutos.push(produto3)
    ArrayProdutos.push(produto4)
    ArrayProdutos.push(produto5)

    // adiciona o atributo produto e coloca o array de produtos
    JSONProdutos.produtos = ArrayProdutos

    // adiciona o atributo count e coloca a quantidade de produtos
    JSONProdutos.count = ArrayProdutos.length

    // adiciona o atributo status e coloca o código 200 que é requisição bem sucedida
    JSONProdutos.status = 200

    console.log(JSONProdutos)
}

// percorrendoArray()
//introducaoArray()
//manipulandoArrayJson()
produtosArrayJson()