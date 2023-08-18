// Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Digite um número:"));
let operador = prompt("informe o operador  +, -, *, /: ");
let numero2 = parseFloat(prompt("Digite outro número:"));
let resultado = 0;

function calculadora() {
    

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
             console.log(`O resultado da soma é: ${resultado}`);
            break;
            calculadora();

            case "-":
            resultado = numero1 - numero2;
            console.log(`O resultado da subtração é: ${resultado}`);
            break;
            calculadora();

            case "*":
            resultado = numero1 * numero2;
            console.log(`O resultado da multiplicação é: ${resultado}`);
            break;
            calculadora();

            case "/":
            resultado = numero1 / numero2;
            console.log(`O resultado da divisão é: ${resultado}`);
            break;
            calculadora();

        default: console.log("Opção inválida");
            break;
            calculadora();
    }
    
    
}
calculadora();

