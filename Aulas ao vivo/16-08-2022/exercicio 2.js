  

/* 
Eleição
Numa eleição existem três candidatos. 
Faça um programa que peça o  número total de eleitores. 
Peça para cada eleitor votar e ao final
  mostre o número total de eleitores e o número de votos de cada candidato.
 */

var candidatos = [ 
        candidato1 = {
            name: "Fulano",
            votos: 0,
        }, 
        candidato2 = {
            name: "Beltrano",
            votos: 0,
        },
        candidato3 = {
            name: "Sicrano",
            votos: 0,
        },
    ],
    voto = 0,
    qntDeEleitores = [],
    // eleitores = 3,
    totalDeVotos = 0;


qntDeEleitores.length = parseInt( prompt( "qual a quantidade de eleitores? " ) );

for( i of qntDeEleitores ) { 
    
    voto = parseInt( prompt ( `
        digite 1 para votar em ${ candidato1.name }
        digite 2 para votar em ${ candidato2.name }
        digite 3 para votar em ${ candidato3.name }
    ` ) );
    switch( voto ) {
        case 1: {
            candidato1.votos++;
            totalDeVotos++;
        }
        break;
        case 2: {
            candidato2.votos++;
            totalDeVotos++;
        }
        break;
        case 3: {
            candidato3.votos++;
            totalDeVotos++;
        }
        break;
    }

} 

for( indice in candidatos ) {
    console.log( `
    Candidato: ${ candidatos[indice].name }
    Votos: ${ candidatos[indice].votos }
    ============================
    ` );
}

console.log( `
    Numero de candidatos: ${ candidatos.length }
    Numero de eleitores: ${ qntDeEleitores.length }
    Total de votos: ${ totalDeVotos }
    ============================
` );

