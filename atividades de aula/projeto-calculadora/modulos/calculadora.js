let lyh = require( "../../../../stacks/lyh" );

let calc = [
    somar = function( x, y ) {
        return x + y;
    },
    multiplicar = function( x, y ) {
        return x * y;
    },
    subtrair = function( x, y ) {
        return x - y;
    },
    dividir = function( x, y ) {
        if( x == 0 || y == 0 ){
            return "Não se pode dividir por zero";
        } else{
            return x / y;
        }
    },
];








/* [ exports ] 
=============================*/
module.exports = calc;