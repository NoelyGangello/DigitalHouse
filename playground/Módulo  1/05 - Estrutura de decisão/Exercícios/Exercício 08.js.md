

# Exercício 08

Precisamos de ajuda para escrever um código que de acordo com a quantidade de lados iguais de um triângulo, exiba com console.log se ele é Equilátero, Isósceles ou Escaleno, sem a necessidade de repetir no código a palavra “triângulo”. 

    − Triângulo Equilátero: possui os 3 lados iguais.	
    − Triângulo Isósceles: possui 2 lados iguais.	
    − Triângulo Escaleno: possui 3 lados diferentes

Nesse exercício a variável ladosIguais já estará definida.

```javascript
// RESPOSTA:
// ================================================

var ladosIguais = 0

if(ladosIguais == 3){
    console.log("Equilátero");
}else if(ladosIguais == 2){
    console.log("Isósceles");
}else if(ladosIguais == 0){
    console.log("Escaleno");
}

```