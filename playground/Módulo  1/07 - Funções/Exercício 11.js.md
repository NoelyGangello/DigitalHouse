

# Exercício 11


Já sabemos que o loop for executa repetidamente um pedaço de código que indicarmos enquanto uma determinada condição for atendida, a condição de parada.

O for tem uma variável contadora, comumente a chamamos de i (mas pode aparecer com outros nomes), e é importante entender o comportamento desta variável: a cada loop ela terá seu valor alterado.

    for ( var i = 0 ; i < 4; i++ ){ 
        console.log ("Roi...!");
    }

Ciente disso, crie uma função chamada passoAPasso que irá executar um loop com 5 repetições e cada ciclo desse loop deve imprimir o valor da variável i que irá começar no zero.

Exemplo:

    passoAPasso();
    // Deve imprimir 0, 1, 2, 3, 4 


```javascript
// RESPOSTA:
// ================================================

function passoAPasso() {
    for( indice = 0; indice < 5; indice++ ){
        console.log( indice );
    }
}

```