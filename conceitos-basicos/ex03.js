// Converta uma temperatura de Celsius para Fahrenheit usando funções.
let celsius = 20;
let fahrenheit = 0;
function temperatura(celsius) {
    fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
let resultadoFahrenheit = temperatura(celsius);
console.log(`${celsius}ºC é igual a ${resultadoFahrenheit}ºF`)
