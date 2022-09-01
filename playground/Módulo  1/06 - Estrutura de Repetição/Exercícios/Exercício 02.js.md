

# Exercício 02 

Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. 
Exemplo:

    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70 
    
Lembre-se de fazer a multiplicação do 7 x 1 até 7 x 10! 

Ah, uma última dica: Você deve usar a variável i que é nosso contador para concatenar na hora de montar a mensagem “7 x 1”!
Afinal os valores depois do " x " (1,2,3,4…) são os valores que mudam de acordo com cada interação do loop.

    - Temos código que deve se repetir? Que tal usar o loop for?
    - Lembre-se de colocar o trecho fixo como string e concatenar com a expressão de multiplicação.
    - O contador do loop pode ser utilizado no lugar do número que deve variar de 1 a 10
    - Lembre-se de colocar os espaços corretamente para imprimir a string esperada.

```javascript
// RESPOSTA:
// ================================================

    for(i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " + 7 * i);
    }

```