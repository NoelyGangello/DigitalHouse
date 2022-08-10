// Alterar número

// Faça um código que receba 2 números e troque seus valores de forma automática.
// OBS: Não utilize funções nativas do JavaScript.
// Ex: se receber a = 10 e b = 20
 // deverá imprimir a = 20 e b = 10
//  =====================================

var a = parseInt( prompt( "digite um numero para a: " ) ),
    b = parseInt( prompt( "digite um numero para b: " ) ),
    c = a,
    
    a = b,
    b = c;

console.log( `a = ${a} e b = ${b}` );

