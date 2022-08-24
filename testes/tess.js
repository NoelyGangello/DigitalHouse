

function somaDosPares(numero){
    var resultado = 0;
     for(indice = 1; indice <= numero; indice++){
        if(indice % 2 == 0){
            resultado += indice;
        }
     }
     return resultado;
}

console.log(somaDosPares(6))