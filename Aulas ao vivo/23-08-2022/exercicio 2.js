   


/* 
O IMC é calculado pela divisão do seu peso (em Kg) pela sua altura ao quadrado (em metros).
Por exemplo, se quiséssemos calcular o IMC de uma pessoa que tem uma altura de 1, 74m e pesa 84Kg, 
usamos a seguinte fórmula:
IMC = Peso / (Altura x Altura)
IMC = 80 / (1,74 x 1,74)
IMC = 26, 4
Para interpretar o resultado, usa-se a seguintes valores como referência:
IMC abaixo de 18,5 – Abaixo do peso
IMC entre 18,5 e 24,9 – Peso Normal
IMC entre 25 e 29,9 – Sobrepeso
IMC entre 30 e 34,9 – Obesidade Nível 1
IMC entre 35 e 39,9 – Obesidade Nível 2
IMC acima de 40 – Obesidade Nível 3

Uma equipe médica está fazendo um estudo com pessoas que apresentam algum nível de obesidade (níveis 1, 2 ou 3). 
Todos os valores dos IMC dos pacientes (com grau de obesidade) estão armazenados em uma lista (array).

Os médicos resolvem contratar um programador para automatizar a tarefa de separação dos grupos.
E adivinhe só?! Você é esse programador! xD
Seu trabalho será pegar cada valor do array IMC e separá-los em seus respectivos grupos.

Crie três arrays e armazene os dados da seguinte forma:
obesidadeNivel1 – Entre 30 e 34,9
obesidadeNivel2 – Entre 35 e 39,9
obesidadeNivel3 – Acima de 40
*/

var imcDosPacientes = [ 32, 34.9, 42, 41, 37, 39 ],
    obesidadeNivel1 = [],
    obesidadeNivel2 = [],
    obesidadeNivel3 = [];


// for( i = 0; i < imcDosPacientes.length; i++ ) {
//     if( imcDosPacientes[i] >= 30 && imcDosPacientes[i] <= 34.9 ) {
//         obesidadeNivel1.push( imcDosPacientes[i]);
//     } else if( imcDosPacientes[i] >= 35 && imcDosPacientes[i] <= 39.9 ) {
//         obesidadeNivel2.push( imcDosPacientes[i] );
//     } else if( imcDosPacientes[i] > 40 ) {
//         obesidadeNivel3.push( imcDosPacientes[i] );
//     }
// }
imcDosPacientes.forEach( indice => {

    if( indice >= 30 && indice <= 34.9 ) {

        obesidadeNivel1.push( indice);

    } else if( indice >= 35 && indice <= 39.9 ) {

        obesidadeNivel2.push( indice );

    } else if( indice > 40 ) {

        obesidadeNivel3.push( indice );

    }

} );

console.log(`=============================
obesidade nivel 1:  ${ obesidadeNivel1 }
obesidade nivel 2:  ${ obesidadeNivel2 }
obesidade nivel 3:  ${ obesidadeNivel3 }
=============================`
);


