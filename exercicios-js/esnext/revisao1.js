// ⭐ {let}: Tem escopo de bloco.
// ⭐ {var}: Tem escopo global.
{
    var a = 2;
    let b = 3;
    console.log(`Primeiro:`, { a, b});
}
// console.log(`Segundo:`, {a, b});

// ⭐ {Template String}: Delimita uma string dessa forma (`string`). Assim o valor de variáveis e interpolado. Além de reconhcer quebras de linha e outros elementos úteis.
const produto = 'iPad';
console.log(`Jose: ${produto} é caro!
João: É mesmo.`);

// ⭐ {Destructuring}: Retira de dentro de arrays, strings, objetos e etc, informações relevantes.
const [l, e, ...tras] = "Cod3r"; // Uma string é um array.
console.log(l, e, tras);

const [x, ,y] = [1, 2, 3]; // O {espaço vázio ignora} o segundo elemento.
console.log(x, y);

const { nome, idade: i } = { nome: "Grazi", idade: 18 } // Podemos {renomear} os atributos retirados dos objetos para uso. Exemplo na idade.
console.log(nome, i);