//Crie uma função que receba um array de números e retorne a média deles.
let numeros = [10, 20, 30, 40, 50];
let mediaCalculada = 0;

function calcularMedia(array) {
    let soma = 0;
    
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    mediaCalculada = soma / array.length;
    return mediaCalculada;
}

let resultadoMedia = calcularMedia(numeros);
console.log(`A média dos números é: ${resultadoMedia}`);
