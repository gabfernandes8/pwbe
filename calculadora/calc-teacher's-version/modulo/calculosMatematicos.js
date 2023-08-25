// modelo tradicional de criar funções
function calculadora(numero1, numero2, tipoCalculo) {

    // recebendo os valores dos argumentos da função, em variáveis locis
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado

    // VERSÃO 2.0 - utilizando switch case
    switch (operacao) {
        case "SOMAR":
        case "+":
            resultado = valor1 + valor2
            break

        case "SUBTRAIR":
        case "-":
            resultado = valor1 - valor2
            break

        case "MULTIPLICAR":
        case "*":
            resultado = valor1 * valor2
            break

        case "DIVIDIR":
        case "/":
            if (valor2 == 0) {
                console.log('ERRO: Não é possível realizar uma divisão por 0')
            } else {
                resultado = valor1 / valor2
            }
            break

        default:
            console.log('ERRO: É obrigatório escolher apenas as operações listadas')
            break
    }

    if (resultado != undefined) {
        return Number(resultado).toFixed(2)
    } else {
        return false
    }

    return resultado
}