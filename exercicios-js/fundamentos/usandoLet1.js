// var: global | função
// let: global | função | bloco

var numero = 1      // Se let pode coexistir com outro let interno ao bloco
{
    let numero = 2      // Se var = procura a mais interna
    console.log('dentro = ', numero)
}
console.log('dentro = ', numero)