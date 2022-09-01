

# Exercício 9


Escreva uma função chamada menorNumero. Ela deve receber dois números como parâmetro e retornar o menor entre eles. Caso os números sejam iguais, basta que se retorne qualquer um deles.


```javascript
// RESPOSTA:
// ================================================

function menorNumero(n1, n2){

    if(n1 < n2){
        return n1
    } else if (n1 == n2) {
        return n2
    }
} 

```