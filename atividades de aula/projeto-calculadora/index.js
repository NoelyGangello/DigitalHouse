const calc = require("./modulos/calculadora");


print( `========================
resultado da soma: 
${ somar(6, 9) }
------------------------
resultado da multiplicação:
${ multiplicar(4, 3) }
------------------------
resultado da subtração:
${ subtrair(1, 7) }
------------------------
resultado da divisão:
${ dividir(2, 1) }
------------------------
resultado da divisão por 0:
${ dividir(0, 1) }
========================` );
