//Verifique se um ano é bissexto (divisível por 4 e não por 100, a menos que seja divisível por 400).
let ano = 1992;
if((ano % 4) == 0) {
    console.log(ano, "é um ano bissexto");
} else{
    console.log(ano, "não é um ano bissexto")
}