// Operadores Unários dentro da Sintaxe JavaScript

let num1 = 1
let num2 = 2

// Incremento
num1++
console.log(num1)

// Decremento
--num1
console.log(num1)
/*  Funciona das duas formas */


// Desafio: dá vardadeiro ou falso
console.log(++num1 === num2--)
/*  Resulatado TRUE pois a execução da comparação foi feita antes do decremento de num2 */

console.log(++num1 === --num2)
/* Resultado FALSE pois a comparação é feita depois da execução dos operadores unários */
