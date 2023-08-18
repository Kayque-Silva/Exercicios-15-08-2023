// Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente)
const prompt = require(`prompt-sync`)();
let palavra = prompt("Digite uma palavra para saber se ela é um palíndrome: ");
let palindromo = true;

for (let i = 0; i < palavra.length / 2; i++) {
    if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        palindromo = false;
        break;
    }
}

if (palindromo) {
    console.log(palavra, "é um palíndromo");
} else {
    console.log(palavra, "não é um palíndromo");
}
