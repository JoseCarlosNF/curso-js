// IIFE -> Immediately Invoked Function Expression

func(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo abrangente!')
})()