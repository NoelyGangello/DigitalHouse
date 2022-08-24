/* Utilize o mesmo código do primeiro exercício e desta vez informe ao usuário
com idades abaixo de 18 anos a seguinte frase: “Infelizmente você não tem
autorização para dirigir”*/


var alturaPessoa = 168; 
var idade = 18;
var mensagemParaMenores = "Infelizmente você não tem autorização para digirir";


var mensagemDeOk = "você poderá pilotar o carro de F1!";
var mensagemNaoOk = "você não tem a altura mínima para pilotar esta máquina";

if(idade < 18){
    console.log(mensagemParaMenores)
} else if( alturaPessoa >= 160 ) {
    console.log( mensagemDeOk );
} else if(alturaPessoa < 160) {
    console.log(mensagemNaoOk);
} 







