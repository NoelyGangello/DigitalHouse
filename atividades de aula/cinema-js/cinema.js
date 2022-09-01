var lyh = require( "../../../stacks/lyh" );

var catalogo = [
    filme01 = {
        codigo: 001,
        titulo: "Nome do filme",
        duracao: 120,
        atores: [
            "Ator 01", "Ator 02", "Ator 03",
        ],
        anoDeLancamento: 2022,
        emCartaz: true,
    },
    filme02 = {
        codigo: 002,
        titulo: "Nome do filme",
        duracao: 120,
        atores: [
            "Ator 01", "Ator 02", "Ator 03",
        ],
        anoDeLancamento: 2021,
        emCartaz: false,
    },
];


/* [ Functions ] 
============================================ */
function adicionarFilme( catalogo, codigo, titulo, duracao, 
                         atores, anoDeLancamento, emCartaz  ) {
    return catalogo.push( {
        codigo, titulo, duracao, atores,
        anoDeLancamento, emCartaz
    } );
}

function buscarFilme( catalogo, codigo ) {
    for( i in catalogo ) {
        if( catalogo[i].codigo == codigo ) {
            print( `o filme é: ${ catalogo[i].titulo }` );
        }
    }
}

function alterarStatusEmCartaz( catalogo, codigo ) {
}










/* [ testes ] 
=================================== */
adicionarFilme(
    catalogo,
    003,
    "um olhar do paraiso",
    120,
    [
        "eduarda",
        "francisco",
        "marcos",
        "steven",
        "clara",
        "laura",
    ],
    1984,
    true
);


buscarFilme( catalogo, 003 );
log( buscarFilme( catalogo, 003 ) );
print( filme02 );

print( catalogo );










/* [ exports ] 
=================================== */
module.exports = {
    adicionarFilme,
    buscarFilme,
    alterarStatusEmCartaz,
}