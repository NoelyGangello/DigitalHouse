

/*Crie um código que receba um usuário e senha(Através do prompt) em 
seguida compare o valor digitado com os valores que já existem nas variáveis usuarioValidado 
e senha Validada caso o valor bater com o das variáveis exiba a frase “Usuário autenticado”, 
caso contrário exiba “Usuário ou senha inválidos”*/var login = prompt("Insira seu login");


var senha = parseInt(prompt("insira a sua senha"))

var usuarioValidado = "xaropinho"

var senhaValidada = 123456

if (login == usuarioValidado && senha == senhaValidada) {
  console.log("usuario autenticado")
} else {
  console.log("login e senha não autenticado")
}

