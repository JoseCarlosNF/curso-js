// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3);                  // Parametros da função
imprimirSoma(2);                     // Not a Number
imprimirSoma(2, 3, 4, 5, 6, 7, 8);   // Soma apenas os dois primeiros

// Função com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())                 //Not a number
