const valor = 'Global'

function minhFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhFuncao()
}

exec()