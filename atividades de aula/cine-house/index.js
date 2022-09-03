var cineHouse = require( "./modulos/cineHouse" ),
    catalogo = require( "./modulos/catalogoCineHouse" );

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


