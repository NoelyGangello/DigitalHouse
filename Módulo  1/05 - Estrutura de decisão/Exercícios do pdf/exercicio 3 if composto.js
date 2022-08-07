/* Desenvolva um código que receba uma variável alturaPessoa que guarda um
valor do tipo numérico (inteiro).
Caso a altura do usuário seja maior ou igual a 160cm, imprima na tela: ”Você
poderá pilotar o carro de F1!”
Se a altura for inferior a 170cm, imprima: “Você não tem a altura mínima para
pilotar esta máquina!”.*/


var alturaPessoa = 168;

if( alturaPessoa >= 160 ) {
    console.log( "você poderá pilotar o carro de F1!" );
} else if(alturaPessoa < 160) {
    console.log("você não tem a altura mínima para pilotar esta máquina")
}