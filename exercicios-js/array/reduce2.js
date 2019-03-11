// 🔆 Simulação da Implementação do Reduce

Array.prototype.reduce2 = function (callback, valorInicial) {
  const indiceInicial = valorInicial ? 0 : 1
  let acumalador = valorInicial || this[0]
  for (let i = indiceInicial; i < this.length; i++) {
    acumalador = callback(acumalador, this[i], i, this)
  }
  return acumalador
}

const soma = (total, valor) => total += valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma))