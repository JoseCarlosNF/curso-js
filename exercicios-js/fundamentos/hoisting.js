// Hoisting com "var"
// acontece o hoisting
console.log('a =', a)
var a = 2
console.log('a =', a)

// Hoisting com "let"
// não acontece o hoisting
console.log('b =', b)
let b = 2
console.log('b =', b)