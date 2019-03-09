// Simulando forEach

// Implementando forEach2 no prototype do array
Array.prototype.forEach2 = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this)
  }
}

const aprovados = ['Aghata', 'Aldo', 'Daniel', 'Raquel']

// Testando
aprovados.forEach2(function (nome, indice) {
  console.log(`${indice + 1}: ${nome}`)
})