


//Exercício 3
//Faça um programa, com uma função que necessite de três parâmetros,

// e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos
//  três números, através de uma segunda função que chama a primeira.


function soma( n1, n2, n3 ) {
    return n1 + n2 + n3;
}

function media( n1, n2, n3 ) {
    return soma( n1, n2, n3 ) / 3;
}

console.log( media( 5, 5, 5 ) );
