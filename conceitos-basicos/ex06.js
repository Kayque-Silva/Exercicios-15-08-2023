// Escreva uma função que inverta uma string (exemplo: "hello" => "olleh").

const prompt = require("prompt-sync")();


let palavra = prompt("Digite um palavra: ");
let resultado = ""
for (let i = palavra.length -1; i >=0 ; i--) {
    resultado += palavra[i];
    
}
console.log(resultado);