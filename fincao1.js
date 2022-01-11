// funçao sem retorno 
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(4, 1 )
// -----------------------------



// função com retorno 
function soma1(a, b = 2){
    return a + b
}

console.log(soma1(2))
// ------------------------------


//função armazenada em vareavel
var executar = function(a, b) {
    return a - b
}

console.log(executar(4, 8))
// ------------------------------


// aramazenamento de função arrow em uma vareavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))
// -------------------------------


// função arrow sem chaves valida apenas para exedcução de uma sentença
const soma3 = (a, b) => a - b

console.log(soma3(4,3))
// --------------------------------


// função arrow com 1 parametro
const soma2 = a => console.log(a)

soma2('oiiiiiiiii')
//---------------------------------

