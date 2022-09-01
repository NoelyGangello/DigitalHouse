

# Exercício 10


Para este exercício considere uma função que já foi definida, ela se chama validaCPF.

Esta função recebe um parâmetro que representa um possível CPF e tudo que ela faz resume-se em um único objetivo: retornar true caso o parâmetro seja um CPF válido ou false caso contrário. 



Eis aqui algo legal sobre funções: tudo que você precisa para utilizá-las é saber o que ela faz. Você não precisa ver como ela faz.


Utilize a função validaCPF para imprimir “CPF válido” caso o cpf “576.524.020-85” seja válido. Caso contrário, imprima “CPF inválido”


```javascript
// RESPOSTA:
// ================================================

if( validaCPF( "576.524.020-85" ) ){
    console.log( "CPF válido" );
} else {
    console.log( "CPF inválido" );
}

```