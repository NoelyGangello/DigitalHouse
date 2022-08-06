

# Exercício 10

O verdadeiro poder do Boolean é que eles podem surgir como resultado de fazer comparações entre diferentes valores com alguns operadores matemáticos.

Por exemplo: sabemos que se fizermos a alguém a pergunta "2 é maior que 1?" a pessoa nos responderia "Sim, é verdade, 2 é maior que 1". O mesmo acontece em JavaScript, só que fazemos essa pergunta da seguinte maneira:

```javascript
2 > 1

// JavaScript sabe que o resultado disso é verdadeiro
```

Isso significa que "2> 1" representa um valor verdadeiro. Também poderíamos ter escrito o código acima da seguinte maneira:

```javascript
var operacao = 2  > 1;
// Como vimos, 2 > 1 corresponde a um valor verdade, neste caso atribuímos a operação a uma variável
// Portanto, o resultado é que o valor da variável operacao é verdadeiro
```
 
 

E se fizermos a alguém a seguinte pergunta: "2 é menor que 1?" Nesse caso, as pessoas nos responderiam: "Isso é falso, 2 não é menor que 1". Novamente, a mesma coisa acontece em JavaScript, mas nós o consultamos da seguinte maneira:

```javascript
var outraOperacao = 2  < 1;
```
 
 

- Para continuar, você deve definir duas variáveis: 
    a numeroMenor e numeroMaior, e atribuir a elas diferentes valores numéricos de acordo com seus nomes.
- Em seguida, defina a variável eMenor, ela deve receber o resultado da comparação se numeroMenor é menor que numeroMaior; 
- Crie mais uma variável eMaior, com o resultado da comparação se numeroMenor é maior que - numeroMaior.

```javascript
// RESPOSTA:
// ================================================

var numeroMenor = 10;
var numeroMaior = 20;

var eMenor = numeroMenor < numeroMaior;
var eMaior = numeroMenor > numeroMaior;
```