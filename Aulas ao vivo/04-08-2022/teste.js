

function relatorioDePassageiros(estacoes){
    var passageiros = 200
    var relatorio = []
    for(i = 0 ; i <= estacoes; i++){
        
    if(i == 5){
        passageiros = passageiro -80 + 120
    }else if (i != 0){
    
        passageiros = passageiros - 30 + 50
     relatorio.push("na estação + i +  há passageiros dentro do trem")
    }
    return relatorio
}}
    console.log(relatorioDePassageiros(5))

