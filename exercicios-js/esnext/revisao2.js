// ⭐ {Arrow} Function
const soma = (a, b) => a + b;
console.log(soma(2, 3));

// ------------------------------------------------------------------

// ⭐ Arrow Function {this}
// Em {arrow fucntion} o {this} sempre {aponta} para {exports}.
const lexico1 = () => console.log(this === exports);

// Em funções {tradicionais} o {this} {aponta} para {global}.
function lexico2() {
    return console.log(this === exports);
}

const lexico3 = lexico1.bind({});
lexico1();
lexico2();
lexico3();

// ------------------------------------------------------------------

// ⭐ Parametros {Default: Padrão}
function log(texto = "Node") {
    console.log(texto);
}

log();
log(null);
// Caso {undefined} 'texto'assume o valor padrão.
log(undefined);
log(`Sou mais forte forte!!`);

// ------------------------------------------------------------------

// ⭐ Operador {rest}
// possibilita a passagem de parametros de forma mais flexível.
function total(...numeros) {
    let total = 0;
    numeros.forEach(num => total += num);
    return total
}
console.log(total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));;

// ------------------------------------------------------------------
