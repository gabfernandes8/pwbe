/****************************************************
 * OBJETIVO: arquivo de funções para calcular médias
 * DATA: 15/09/2023
 * AUTOR: Gabriela Fernandes
 * VERSÃO: 1.0
 *************************************************/

const calcularMedias = (nota1, nota2, nota3, nota4) => {
    let n1 = nota1, n2 = nota2, n3 = nota3, n4 = nota4
    let media

    
    if(n1 == '' || n2 == '' || n3 == '' || n4 == ''){
        console.log('ERRO: é obrigatório inserir todos as notas.')
    } else if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)){
        console.log('ERRO: é obrigatória a entrada somente de números.')
    } else if(n1 > 100 || n1 < 0 || n2 > 100 || n2 < 0 || n3 > 100 || n3 < 0 || n4 > 100 || n4 < 0){
        console.log('ERRO: o valor digitado deve ser obrigatoriamente de 0 até 100.')
    }
    
    n1 = Number(nota1)
    n2 = Number(nota2)
    n3 = Number(nota3)
    n4 = Number(nota4)
    
    media = (n1 + n2 + n3 + n4) / 4

    if (media != undefined){
        return media
    } else{
        return false
    }
}

const verificarSituacao = (media) => {
    let situacao

    if (media >= 70){
        situacao = 'APROVADO'
    } else if (media >= 50){
        situacao = 'EM EXAME'
    } else {
        situacao = 'REPROVADO'
    }

    if (media = '') {
        console.log('ERRO: é necessário inserir todos os valores')
    }

    if (situacao != undefined){
        return situacao
    } else{
        return false
    }

}

const exame = (valorExame, media) => {
    let notaExame = valorExame
    let novaMedia

    novaMedia = (notaExame + media) / 2

    if (notaExame == ''){
        console.log('ERRO: é necessário inserir a nota de exame.')
    }

    if (notaExame != undefined){
        return notaExame
    } else {
        return false
    }
}

const verificarExame = (notaExame) => {
    let sitExame

    if (notaExame >= 60){
        sitExame = 'APROVADO NO EXAME'
    } else {
        sitExame = 'REPROVADO NO EXAME'
    }

    if (sitExame != undefined){
        return sitExame
    } else {
        return false
    }
}

const verificarPronomeProf = (sexoProf) => {
    let sexo = String(sexoProf).toLocaleLowerCase()
    let proProf

    if (sexo == 'feminino'){
        proProf = 'Professora'
    } else if (sexo == 'masculino'){
        proProf = 'Professor'
    }

    if (sexoProf == ''){
        console.log('ERRO: é necessário informar seu gênero.')
    }

    if (proProf != undefined){
        return proProf
    } else {
        return false
    }
}

const verificarPronomeAluno = (sexoAluno) =>{
    let sexo = String(sexoAluno).toLocaleLowerCase()
    let proAluno

    if (sexo == 'feminino'){
        proAluno = 'Aluna'
    } else if (sexo == 'masculino'){
        proAluno = 'Aluno'
    }

    if (sexoAluno == ''){
        console.log('ERRO: é necessário informar seu gênero.')
    }

    if (proAluno != undefined){
        return proAluno
    } else {
        return false
    }
}

const relatorio = (nomeAluno, nomeProf, sexoAluno, sexoProf, nomeDisc, nomeCurso, situacaoMedia) => {
    let aluno = nomeAluno, professor = nomeProf, proAluno = sexoAluno, proProf = sexoProf
    let curso = nomeCurso, disciplina = nomeDisc
    let sit = situacaoMedia

    console.log('')
    console.log('RELATÓRIO DO ALUNO')
    console.log('')

    if(proAluno == 'Aluna'){
        console.log('A aluna, ' + aluno + ', foi ' + sit + ' na disciplina ' + disciplina + '.')
    } else if(proAluno == 'Aluno'){
        console.log('O aluno, ' + aluno + ', foi ' + sit + ' na disciplina ' + disciplina + '.')
    }

    console.log('Curso: ' + curso)
    
    if (proProf == 'Professora'){
        console.log('Professora: ' + professor)
    } else if (proProf == 'Professor'){
        console.log('Professor: ' + professor)
    }

    return true
}

const relatorioExame = (sexoAluno, nota1, nota2, nota3, nota4, notaExame, situacaoExame, media, novaMedia) => {
    let proAluno = sexoAluno
    let n1 = nota1, n2 = nota2, n3 = nota3, n4 = nota4, nE = notaExame
    let mediaExame = novaMedia, sitExame = situacaoExame, mediaFinal = media

    if(proAluno == 'Aluna'){
        console.log('Notas da aluna: ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4 + ', ' + nE)
    } else if(proAluno == 'Aluno'){
        console.log('Notas do aluno: ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4 + ', ' + nE)
    }

    console.log('Média final: ' + mediaFinal)
    console.log('Média final do exame: ' + mediaExame)
    console.log('Situação do exame: ' + sitExame)

    return true
}

const relatorioAvaliacao = (sexoAluno, nota1, nota2, nota3, nota4, media) => {
    let proAluno = sexoAluno
    let n1 = nota1, n2 = nota2, n3 = nota3, n4 = nota4
    let mediaFinal = media

    if(proAluno == 'Aluna'){
        console.log('Notas da aluna: ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4)
    } else if(proAluno == 'Aluno'){
        console.log('Notas do aluno: ' + n1 + ', ' + n2 + ', ' + n3 + ', ' + n4)
    }

    console.log('Média final: ' + mediaFinal)
  
    return true
}

module.exports={
    calcularMedias,
    verificarSituacao,
    exame,
    verificarExame,
    verificarPronomeProf,
    verificarPronomeAluno,
    relatorio,
    relatorioExame,
    relatorioAvaliacao
}