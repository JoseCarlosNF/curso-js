// Criando Objeto ferrari
const ferrari = {
  modelo: 'F40',
  velMax: 324
}

// Criando Objeto volvo
const volvo = {
  modelo: 'V40',
  velMax: 200
}

// Testando Super Objetos
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
// Prototipo do prototipo
console.log(Object.prototype.__proto__ === null)


function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)