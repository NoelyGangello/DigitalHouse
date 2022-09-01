

# Exercício 15


Vamos fazer mais um exercício para incorporar melhor o que foi aprendido na seção anterior.


Você deve criar uma função chamada somaDosPares  que irá receber um parâmetro que será um numero. Essa função deve retornar a soma de todos os números pares de 1 até o o valor que recebemos com parâmetros, incluindo ele proprio. Exemplo:

    somaDosPares(6) // vai retornar 12
    // pois será 2 + 4 + 6


```javascript
// RESPOSTA:
// ================================================

function somaDosPares( numero ){
 var somatoria = 0
    for( i = 1; i <= numero; i++ ) {
        if( i % 2 == 0 ) {
            somatoria += i;
        }
    }
    return somatoria;
}


```