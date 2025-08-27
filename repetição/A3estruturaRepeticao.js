import promptSync from 'prompt-sync'
const prompt = promptSync()

let numero = Number(prompt("Digite um número inteiro para verificar se é primo:"));


if (isNaN(numero)) {
    console.log("Por favor, insira um número válido.");
} else if (numero <= 1) {
    console.log(`${numero} não é um número primo (números menores ou iguais a 1 não são primos).`);
} else {
    let ehPrimo = true;
    let divisores = [];

    // Verifica divisores
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            divisores.push(i);
            if (i !== numero / i) {
                divisores.push(numero / i);
            }
        }
    }

    if (ehPrimo) {
        console.log(`${numero} é um número primo.`);
    } else {
        // Ordena os divisores
        divisores.sort((a, b) => a - b);
        console.log(`${numero} NÃO é um número primo.`);
        console.log(`Ele é divisível por: ${divisores.join(", ")}`);
    }
}