

// function passoAPasso(nome){
//     for(indice = 0; indice < 101; indice++){
//         console.log("oi " + nome  + " " + indice)
//     }
// }

//  passoAPasso("noely")

function somaDosPares(numero){

    var resultado = 0;

     for(indice = 1; indice <= numero; indice++){
        if(indice % 2 == 0){
            resultado += indice;
        }
     }

    return resultado = resultado;
}

console.log(somaDosPares(6))