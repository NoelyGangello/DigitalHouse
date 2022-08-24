// Exercício 4
// A Digital House resolveu dar um aumento de salário aos seus colaboradores e lhe 
// contrataram para desenvolver um script que calculasse os reajustes.
// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
// baseado no salário atual:
//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.


// var salarioAtual = 700.00;
var salarioAtual = parseFloat( prompt( "Digite seu salário para calcular: " ) );
var salarioAntigo = salarioAtual;


if( salarioAtual <= 280.00 ) {

    salarioAtual *= 1.20;
    console.log( `o seu salário antes do reajuste era: ${ salarioAntigo }
    o percentual de aumento para o reajuste para o seu salário é de: 20%
    o valor do aumento é de: ${ Math.round( salarioAtual - salarioAntigo ) }
    seu novo salário com aumento é de: ${ Math.round( salarioAtual ) }` );

} else if( salarioAtual > 280.00 && salarioAtual <= 700.00 ) {

    salarioAtual *= 1.15;

    console.log( `
        o seu salário antes do reajuste era: ${ salarioAntigo }
        o percentual de aumento para o reajuste para o seu salário é de: 15%
        o valor do aumento é de: ${ Math.round( salarioAtual - salarioAntigo ) }
        seu novo salário com aumento é de: ${ Math.round(salarioAtual ) }`
     );

} else if( salarioAtual > 700.00 && salarioAtual <= 1500.00 ) {

    salarioAtual *= 1.10;

    console.log( `o seu salário antes do reajuste era: ${ salarioAntigo }
    o percentual de aumento para o reajuste para o seu salário é de: 10% 
    o valor do aumento é de: ${ Math.round( salarioAtual - salarioAntigo ) }
    seu novo salário com aumento é de: ${ Math.round( salarioAtual ) }` );

} else if( salarioAtual > 1500.00 ) {

    salarioAtual *= 1.05;

    console.log( `o seu salário antes do reajuste era: ${ salarioAntigo }
    o percentual de aumento para o reajuste para o seu salário é de: 5% 
    o valor do aumento é de: ${ Math.round( salarioAtual - salarioAntigo ) }` );

}