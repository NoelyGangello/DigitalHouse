

# Exercício 01

Vamos começar com o básico:

As funções consistem em 4 partes:

    - A palavra-chave da função.
    - O nome com o qual vamos chamar a função: function nomeFuncao
    - Os parênteses onde os parâmetros irão (se você precisar deles): function nomeFuncao (parametro1, parametro2, ..., parametroX)
    - Insira {} colchetes o código que queremos que a função execute: função nomeFuncao (parametro1, ..., parametroX) {código} Se quisermos que uma função retorne um valor, precisaremos da palavra-chave return. Depois disso, tudo o que queremos retribuir irá.

Com funções, podemos fazer muitas coisas, mas vamos começar com algo fácil. Aqui escrevemos a função que duplica o valor do número que passamos a ela.

```
function dobro(numero) {
   return 2 * numero;
}
```

Como podemos ver acima, declaramos uma função com a palavra-chave function com o nome dobro. Entre os parênteses, colocamos o parâmetro do número que será substituído pelo número que damos quando o chamamos a nossa função. Finalmente, com a palavra return, dizemos que o que queremos é retornar 2 vezes o número que vamos receber por parâmetro.


    É muito importante entender que agora, embora estejamos declarando uma função, não a estamos executando.

Agora é sua vez de criar uma função:


    Você deve criar uma função chamada triplo que recebe um numero como parâmetro,  e ela irá retornar o triplo desse numero.



```javascript
// RESPOSTA:
// ================================================

    function triplo( numero ) {
        return numero * 3 
    }

```