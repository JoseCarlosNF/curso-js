// Operadores Ternários


/* Composição:
 * 	1ª Expressão: nota >=7
 * 	2ª If True: 'Aprovado'
 * 	3ª If Flase: 'Reposvado'
 */

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))
