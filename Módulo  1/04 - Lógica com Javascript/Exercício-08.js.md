

# Exercício 08

Vimos como declarar uma variável e atribuir um valor a ela, agora você provavelmente está se perguntando: qual é a utilidade de armazenar dados em variáveis?

As variáveis ​​nos permitem reutilizar os dados atribuídos a ela apenas invocando seu nome.

```JAVASCRIPT
let umNumero = 124;
console.log(umNumero);
// Ao usar o comando console.log para imprimir o valor atribuído à variável umNumero veremos no console o valor 124

```
Assim como podemos fazer operações matemáticas de adicionar (+) ou subtrair (-) números, podemos fazer o mesmo com variáveis ​​que já foram declaradas.

```JAVASCRIPT
let umNumero = 124;
console.log(umNumero);
let outroNumero = umNumero + 1;
console.log(outroNumero );
// O valor atribuído à outroNumero será impresso no console. Veremos 125. 
```
- Vamos ver se você entendeu: 
- -----------------
    Declare duas variáveis ​​numeroA e numeroB e atribua valores numéricos à elas. Depois, crie as seguintes variáveis:

    - resultadoSoma - contendo a soma de numeroA e numeroB
    - resultadoMultiplicacao - contendo a multiplicação de numeroA e numeroB
    - resultadoDivisao - contendo a divisão de numeroA e numeroB
    - resultadoSubtracao - contendo a subtração de numeroA e numeroB
    

```JAVASCRIPT
// RESPOSTA:
// ================================================

var numeroA = 50;
var numeroB = 15;
var resultadoSoma = numeroA + numeroB;
var resultadoMultiplicacao = numeroA * numeroB;
var resultadoDivisao = numeroA / numeroB;
var resultadoSubtracao = numeroA - numeroB;
```