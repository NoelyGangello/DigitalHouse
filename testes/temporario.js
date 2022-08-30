function _( v ) { console.log(v) }

var frase01 = ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "e", "d", " ", "e", "*", "v", "a", "h", "C"];
var frase02 = ["a", "r", "*", "i", "e", "f","*", "-", "*", "a", "d", "n", "*", "u", "g", "e", "s", " ", "*", "é", " ", "e", "*", "j", "o", "*", "H", "*"];

function aChaveSecreta( lista ) {
    return lista.reverse().filter( v => v !== "*" ).join( "" );
}


_( aChaveSecreta( frase01 ) );
_( aChaveSecreta( frase02 ) );



let naoNumerico = NaN;
console.log(naoNumerico)

let jogadores = null
console.log(jogadores)

let expectadores = 10
console.log(expectadores)


let carro = {
marca : "gol",
ano : "1995",
modelo : "cb500",

}
console.log(carro)


let nome = "noely";
let sobreNome = "oliveira, gangello";
let nomeCompleto = nome + " " + sobreNome;
console.log(nomeCompleto)

//adicao
console.log(2+2)

//subtracao
console.log(20-15)

//divisao
console.log(4/2)
 
let numero = 10;
//incremento 
console.log(++numero);

//decremento
console.log(--numero);

//comparacao de maior 
console.log(10 > 5);
console.log(10 < 5);

//comparacao de menor ou igual
console.log(10 <= 3);
console.log(5 < 6);
console.log(100<= 50);

//comparacao de maior ou igual
console.log(150 >= 50);

//comparacao de igualdade
console.log(10 == 10);
console.log("ola" == "ola")

//comparacao de igualdade rigido
console.log(5 === "5");

//comparacao de diferente
console.log(10 !=10);
console.log("olá" != "oi");

//comparacao de diferente rigido
console.log("olá" !== "oi");



let nomeDePessoa2 = "gabriela";
let sobreNomeDaPessoa2 = "oliveira";

console.log(nomeDePessoa2 + " " + sobreNomeDaPessoa2)



function saudacao(nome, sobrenome){
    return 'olá' + " " + nome +   ' ' + sobrenome;
}

let nomeDo = saudacao( 'anselmo', 'sammarco' );

 _( 
     saudacao('anselmo', 'sammarco' )
 )


 function darOi(){
    console.log("olá tudo bem?")
 }
darOi()



var somar = function(numA, numB){
    
    console.log(numA - numB);
}
somar(10, 2);

var dia = "sexta";
 if(dia == "sexta"){
    console.log("vou para a praia !")
 }else if(dia == "sabado" ){
    console.log("vou ir ao  cinema")
 }else{console.log("fico em casa")}

    


