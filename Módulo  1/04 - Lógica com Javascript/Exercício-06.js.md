

# Exercício 06


Temos um desafio para você! 


Precisamos criar um código que gere cartão de visita com nome, 
sobrenome e profissão dos clientes, para isso:

Crie uma variável para guardar cada informação 
(cada uma deve receber um dos 3 nomes acima), 
Depois faça a concatenação das informações em uma nova variável 
chamada cartaoDeVisita.


- Exemplo:
```javascript
nome: Taylor
sobrenome: Alvarenga
profissão: Programadora

```
- Cartão de visita esperado: “Taylor Alvarenga - Programadora”

OBS: no desenvolvimento da variável cartaoDeVisita deixar um espaço entre 
caractere e caractere de concatenação.


```javascript
// RESPOSTA:
// ================================================

var nome = "Taylor";
var sobrenome = "Alvarenga";
var profissao = "Programadora";

var cartaoDeVisita = nome + " " + sobrenome + " - " + profissao;

```


<details>
    <summary>area de testes</summary>
    
    
     var cartaoDeVisita = `${nome} ${sobrenome} - ${profissao}`;

     print(cartaoDeVisita); 
    
    
</details>