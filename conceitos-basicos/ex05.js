// Crie uma função que remova elementos duplicados de um array.
function removerDuplicados(array) {
    let arrayUnico = [];

    for (let elemento of array) {
        if (!arrayUnico.includes(elemento)) {
            arrayUnico.push(elemento);
        }
    }

    return arrayUnico;
}

let times = ['Real Madrid', 'Chelsea', 'Milan', 'Manchester City', 'Chelsea', 'Real Madrid'];
let timesUnicos = removerDuplicados(times);
console.log(timesUnicos);
