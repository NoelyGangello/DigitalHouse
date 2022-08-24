




//Exercício 1
// Faça um programa com uma função chamada somaImposto.
//A função possui dois parâmetros formais: taxaImposto, que é a quantia de imposto sobre vendas
// expressa em porcentagem e custo, que é o custo de um item antes do imposto. A função “altera” o valor de 
// custo para incluir o imposto sobre vendas.


function somaImposto(taxaImposto, custo ){
    return Math.round(custo = custo * taxaImposto);
    
}

console.log( somaImposto(1.10, 100) );