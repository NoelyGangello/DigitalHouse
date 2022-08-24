


 //Usuário e Senha

 //Faça um programa que leia um nome de usuário e uma senha validando essas 
 //informações com as variáveis já existentes no código caso esteja correto mostre uma mensagem
 // informando que o usuário foi autenticado caso contrário mostre uma mensagem de erro e pedindo para serem
 //  inseridas novamente as informações.
 
var usuario = parseInt( prompt( "Digite o seu usuário: " ) ),
    senha = parseInt( prompt( "Digite o sua senha: " ) ),
    usuarioCadastrado = "noely",
    senhaCadastrada = "9117";


while( usuario != usuarioCadastrado || senha != senhaCadastrada ){
  console.log( `usuário ou senha inválidos, digite novamente!` );
}
usuario = parseInt( prompt( "Digite o seu usuário: " ) );
senha = parseInt( prompt( "Digite o sua senha: " ) );


// =======================================

// var usuario = "Pedro"
// var senha = "123"

// var recebeUsuario = prompt("Insira seu usuario: ")
// var recebeSenha = prompt("Insira sua senha: ")

// while(recebeUsuario != usuario || recebeSenha != senha){
//   console.log("Usuário ou senha inválidos, insira suas credencias novamente!!")

// var recebeUsuario = prompt("Insira seu usuario: ")
// var recebeSenha = prompt("Insira sua senha: ")
  
// }

// console.log("Usuario autenticado")
