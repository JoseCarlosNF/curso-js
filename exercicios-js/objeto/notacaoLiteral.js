const a = 1
const b = 2
const c = 3

// Objetos Literalmente
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c }
console.log(obj1, obj2)

// Atributos por variável
const nomeAtributo = 'nota'
const valorAtributo = 7.87
// (forma ANTIGA)
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

// (forma NOVA)
const obj4 = {[nomeAtributo]: valorAtributo}
console.log(obj4)

// Funções dentro de Objetos
const obj5 = {
  funcao1: function() {
    // ...
  },
  funcao2() {
    // ...
  }
}

console.log(obj5)