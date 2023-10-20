/****************************************************************************************
 * OBJETIVO: arquivo de funções para coletar informações dos estados e cidades do Brasil
 * DATA: 20/10/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************************************************/

var pais = require('../estados_cidades.js')

const getListaDeEstados = () => {

    let estados = pais.estadosCidades.estados
    let siglas = {}
    let uf = []

    // forEach
    estados.forEach(function(estados){
        uf.push(estados.sigla)
    })

    siglas.uf = uf
    siglas.quantidade = pais.estadosCidades.estados.length
    return siglas

}

const getDadosEstado = (siglas) => {

    let estados = pais.estadosCidades.estados
    let uf = siglas

    let dados = {}

    // forEach
    estados.forEach(function(estado){
        if (estado.sigla.includes(uf)){
            dados.uf = estado.sigla
            dados.descricao = estado.nome
            dados.capital = estado.capital
            dados.regiao = estado.regiao
        }
    })

    return dados
}

const getCapitalEstado = (siglas) => {

    let estados = pais.estadosCidades.estados
    let uf = siglas

    let dadosCapital = {}

    // forEach
    estados.forEach(function(estado){
        if (estado.sigla.includes(uf)){
            dadosCapital.uf = estado.sigla
            dadosCapital.descricao = estado.nome
            dadosCapital.capital = estado.capital
        }
    })

    return dadosCapital

}

const getEstadosRegiao = (regiao) => {

    let estados = pais.estadosCidades.estados
    let reg = regiao

    let dadosRegiao = {}

    let est = []
    
    // forEach
    estados.forEach((estado) => {
        if (estado.regiao.includes(reg)){

            let estadoRegiao = {
                regiao: estado.sigla,
                descricao: estado.nome
            }

            est.push(estadoRegiao)

        }
    });

    dadosRegiao.regiao = reg
    dadosRegiao.estados = est

    return dadosRegiao

}

const getCapitalPais = () => {

    let estados = pais.estadosCidades.estados

    let capitaisPais = {}
    
    let dadosCapitais = []
    
    estados.forEach((estado) => {
        if (estado.capital_pais  != undefined){
            
            let dadosCapital = {
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
                capital_pais_ano_termino: estado.capital_pais.ano_fim
            }
            
            dadosCapitais.push(dadosCapital)

        }

    })
    
    capitaisPais.capitais = dadosCapitais
    return capitaisPais
}

const getCidades = (siglas) => {

    let estados = pais.estadosCidades.estados

    let uf = siglas

    let estadoCidades = {}
    let cidades = []

    estados.forEach((estado) => {
        if(estado.sigla.includes(uf)){
            estadoCidades.uf = estado.sigla
            estadoCidades.descricao = estado.nome
            estadoCidades.quantidade_cidades = estado.cidades.length

            estado.cidades.forEach((cidade) => {
                cidades.push(cidade.nome)
            })
        }
    })

    estadoCidades.cidades = cidades

    console.log(estadoCidades)

    return estadoCidades

}

getListaDeEstados()
getDadosEstado('SP')
getCapitalEstado('AC')
getEstadosRegiao('Sul')
getCapitalPais()
getCidades('MG')