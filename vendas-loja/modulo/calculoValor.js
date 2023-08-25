// função externa para calcular os valores a partir do código
function calcular(valorProduto, codigoInserido) {
    let preco = valorProduto
    let codigo = codigoInserido
    let valorAtt
    let msg

    switch (codigo) {
        case 1:
            valorAtt = preco - (100 * 0.08)
            msg = preco + 'reais à vista, com desconto de 8% sairá por' + valorAtt
            break

        case 2:
            valorAtt = preco - (100 * 0.04)
            msg = preco + 'reais à vista no cartão, com desconto de 4% sairá por' + valorAtt
            break 
            
        case 3:
            valorAtt = preco / 2
            msg = preco + 'reais, em 2x sem juros sairá por' + valorAtt
            break

        case 4:
            valorAtt = preco / 4 + (100 * 0.08)
            msg = preco + 'reais, em 4x com juros de 8% sairá por' + valorAtt
            break
    
        default:
            break;
    }

    return msg

}

// permite deixar uma função public para outros projetos
module.exports={
    calcular
}