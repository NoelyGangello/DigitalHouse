
// A função a seguir (calculaIdade) não precisa ser alterada
// A sua função deve ser escrita logo abaixo desta
function calcularIdade(dataDeNascimento) {
    let [dia, mes, ano] = dataDeNascimento.split('/');
    const d = new Date();
    const anoAtual = d.getFullYear();
    const mesAtual = d.getMonth() + 1;
    const diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    let quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 function deixaEntrar(dataDeNascimento, censura){
     return calcularIdade(dataDeNascimento) >= censura
 }
 
 console.log(deixaEntrar("14/09/1995", 14))



