import promptSync from 'prompt-sync';
const prompt = promptSync();

let meses = [];
let temperaturas = [];   
let acimaMedia = [];       

for (let i = 0; i < 12; i++) {
    let mes = prompt(`Digite o nome do ${i + 1}º mês: `);
    meses.push(mes);
    let temp;
    do {
        temp = parseFloat(prompt(`Digite a temperatura média de ${mes}: `));
        if (isNaN(temp)) {
            console.log("Por favor, digite um número válido para a temperatura.");
        }
    } while (isNaN(temp));
    temperaturas.push(temp);

    acimaMedia.push(meses[i]);
    acimaMedia.push(temperaturas[i]);
    
}
let somaTemperaturas = temperaturas.reduce((acc, curr) => acc + curr, 0);
let mediaTemperaturas = somaTemperaturas / temperaturas.length;   

console.log(`\nA média anual de temperatura é: ${mediaTemperaturas.toFixed(2)}°C`);
console.log("-------------------");
console.log("Meses com temperatura acima da média:", acimaMedia);
console.log("-------------------");
console.log("Temperaturas acima da média:", temperaturas.filter(temp => temp > mediaTemperaturas));
