// Crie um programa que imprima a tabela de multiplicação de 1 a 10.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let resultado = i * j;
        console.log(`${i} x ${j} = ${resultado}`);
    }
    console.log(""); // Adiciona uma linha em branco após cada linha da tabela
}
