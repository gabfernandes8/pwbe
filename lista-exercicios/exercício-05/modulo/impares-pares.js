/****************************************************
 * OBJETIVO: arquivo de funções para gerenciar números ímpares e pares
 * DATA: 29/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 ***************************************************/

const verifValores = (numeroInicial, numeroFinal, opcaoUsuario) => {
    let nInicial = numeroInicial
    let nFinal = numeroFinal
    let opcao = opcaoUsuario

    if (nInicial < 0 || nInicial > 500) {
        console.log('ERRO: É necessário inserir números apenas entre 0 e 500.')
        return false
    } else if (nFinal < 100 || nFinal > 1000) {
        console.log('ERRO: É necessário inserir números apenas entre 100 e 1000.')
        return false
    } else if (nInicial == '' || nFinal == '') {
        console.log('ERRO: É necessário inserir todos os valores.')
        return false
    } else if (isNaN(nInicial) || isNaN(nFinal)) {
        console.log('ERRO: É neceessário inserir somente números.')
        return false
    } else if (Number(nInicial) > Number(nFinal)) {
        console.log('ERRO: É necessário que o número inicial seja MENOR que o número final.')
        return false
    } else if (nInicial == nFinal || nFinal == nInicial) {
        console.log('ERRO: É necessário que os números inseridos sejam diferentes.')
        return false
    } else if (opcao < 1 || opcao > 3 || opcao % 1 != 0) {
        console.log('ERRO: É necessário escolher uma opção válida.')
        return false
    } else {
        opcao = Number(opcao)
        nInicial = Number(nInicial)
        nFinal = Number(nFinal)

        switch (opcao) {
            case 1:
                verifPares(nInicial, nFinal)
                break

            case 2:
                verifImpares(nInicial, nFinal)

            case 3:
                verifPares(nInicial, nFinal)
                console.log('')
                verifImpares(nInicial, nFinal)
        }
    }
}

const verifPares = (numeroInicial, numeroFinal) => {
    let nInicial = numeroInicial
    let nFinal = numeroFinal
    let qtN = 0

    console.log('-----------------------------------------')
    console.log('NÚMEROS PARES')
    console.log('')

    while (nInicial < nFinal) {
        if ((nInicial % 2 == 0)) {
            console.log(nInicial)
            qtN += 1
        }

        nInicial++
    }

    console.log('')
    console.log('Quantidade de números encontrados: ' + qtN)
    console.log('-----------------------------------------')

    return true
}

const verifImpares = (numeroInicial, numeroFinal) => {
    let nInicial = numeroInicial
    let nFinal = numeroFinal
    let qtN = 0

    console.log('-----------------------------------------')
    console.log('NÚMEROS ÍMPARES')
    console.log('')

    while (nInicial < nFinal) {
        if ((nInicial % 2 != 0)) {
            console.log(nInicial)
            qtN += 1
        }

        nInicial++
    }

    console.log('')
    console.log('Quantidade de números encontrados: ' + qtN)
    console.log('-----------------------------------------')

    return true
}

module.exports = {
    verifValores
}