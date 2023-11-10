/****************************************************
 * OBJETIVO: criar uma api para responder dados de Estados e Cidades
 * DATA: 10/11/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

/*****************************************************
 * Instalações das dependencias para criações de API
 *      - express (npm install express --save)
 *          => dependencia do node para auxiliar na criação da api
 * 
 *      - cors (npm install cors --save)
 *          => dependencia para manipular recursos de acesso, permissões, etc, da api
 * 
 *      - body-parser (npm install body-parser --save)
 *          => dependencia para auxiliar na chegada de dados da api
 ****************************************************/

// import das bibliotecass do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// cria um objeto app tendo como referência a classe do express
const app = express()

/**
 * request = receber dados
 * response = devolve dados
 **/

// função para configurar as permissõe do cors
app.use((request, response, next) => {

    // configura quem poderá fazer requisiçõs na api (* - libera para todos | ip restringe o acesso)
    response.header('Access-Control-Allow-Origin', '*')

    // configura os métodos que poderão ser utilizados na api (GET, POST, PUT e DELETE)
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

// endpoints: listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async (request, response, next) => {
    let controleListaEstados = require('./modulo/func_estados.js')

    response.json('{teste: "api funcionando"}')
    response.status(200)
})

app.listen(8080, () => {
    console.log('api funcionando e ag9uarda9ndo re*8quisi66ç/ões*')
})