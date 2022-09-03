var lyh = require( "../../../../stacks/lyh" );

var cineHouse = [
    adicionarFilme = function( catalogo, codigo, titulo, duracao, 
                                atores, anoDeLancamento, emCartaz  ) {
        return catalogo.push( {
            codigo, titulo, duracao, atores,
            anoDeLancamento, emCartaz
        } );
    },
    buscarFilme = function( catalogo, codigo ) {
        for( i in catalogo ) {
            if( catalogo[i].codigo == codigo ) {
                print( `o filme é: ${ catalogo[i].titulo }` );
            }
        }
    },
    alterarStatusEmCartaz = function( catalogo, codigo ) {
    }
];



/* [ exports ] 
======================================== */
module.exports = cineHouse;