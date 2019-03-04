let comparaComThis = function(param) {
    console.log(this === param)
}

// comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
// comparaComThis(global)
// comparaComThis(obj)

let comprarComThisArrow = param => console.log(this === param)
// comprarComThisArrow(global)
// comprarComThisArrow(module.exports)

comprarComThisArrow = comprarComThisArrow.bind(obj)
comprarComThisArrow(obj)
comprarComThisArrow(module.exports)