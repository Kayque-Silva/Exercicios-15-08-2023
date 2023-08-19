// Crie uma função que retorne o maior valor entre três números.
const prompt = require("prompt-sync")();
let numero1 = parseFloat(prompt("Digite um número: "));
let numero2 = parseFloat(prompt("Digite outro um número: "));
let numero3 = parseFloat(prompt("Digite mais um número: "));
if (numero1 > numero2 && numero1 > numero3){
    console.log(`${numero1} é o valor mais alto dos três números informado.`);
} else  if (numero2 > numero1 && numero2 > numero3){
    console.log(`${numero2} é o valor mais alto dos três números informado.`);
} else  {
    console.log(`${numero3} é o valor mais alto dos três números informado.`);
}