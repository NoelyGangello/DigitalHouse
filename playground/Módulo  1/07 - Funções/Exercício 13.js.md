

# Exercício 13


Nos exercícios anteriores, realizamos muitas repetições, porém em todas havíamos colocado um numero fixo de repetições e em alguns momentos esse valor pode ser variável.

Por exemplo, poderíamos fazer uma função que imprime 5 vezes a palavra azul e realiza todo esse processo usando o for. E se agora também precisarmos imprimir 4 vezes? Para isso, hoje precisaríamos criar outra função. Como você pode ver, isso não seria muito produtivo, porém com alguns recursos que vimos podemos dar uma melhorada nesse processo e fazer uma função genérica que recebe quantas vezes queremos que algo se repita através do parâmetro.

Para isso, temos que modificar o for. Se quisermos repetir uma instrução 4 vezes, fazemos o seguinte código:

    for( var i = 0 ; i < 4 ; i++ ){ 
            // aqui vai as instruções que queremos repetir
    }

Para que este for seja dinâmico podemos fazê-lo seguir uma X quantidade de vezes ditada por uma variável, bastando então modificar o valor da variável x para que mude assim a quantidade de repetições sem precisar fazer um novo for! Veja o exemplo:

    var x = 4 ;
    for( var i = 0 ; i < x ; i++ ){ 
    // aqui vai as instruções que queremos repetir
    }

O grande diferencial é que agora podemos atribuir diferentes valores à variável x. Uma forma de obter esse valor seria se eles passassem para nós como um parâmetro de uma função e dentro dela, usassem.

    function repetirX( quantidades ){ 
        for( var i = 0 ; i < quantidades; i++ ){ 
            // aqui vai as instruções que queremos repetir
        }
    }

Bom agora é sua vez, você deve criar uma função chamada imprimirAzul que irá receber como parâmetro a quantidade de vezes que a função deverá imprimir a palavra Azul. Exemplo:

    imprimirAzul(3)
    // irá imprimir 3 vezes a palavra Azul


```javascript
// RESPOSTA:
// ================================================

function imprimirAzul( n ) {
    for( indice = 1; indice <= n; indice++ ){
        console.log( "Azul" );
    }
}

```