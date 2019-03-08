// Todos os objetos abaixo são functions
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Adicionando novos metodos as functioons
String.prototype.reverse = function () {
  return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c', 'd'].first())

// Não fazer nunca esse tipo de coisa
String.prototype.toString = function() {
  return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())