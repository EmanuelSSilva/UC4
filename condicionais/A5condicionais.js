import promptSync from 'prompt-sync'
const prompt = promptSync()

console.log("================  SISTEMA DE TARIFA ==================")

let pessoa = Number(prompt("Por favor, informe sua idade: "));
let estud = prompt("É estudante? (s/n): ").toLowerCase();

if (pessoa <= 6) {
    console.log("Entrada gratuita!!!");
} else if ((pessoa > 6 && pessoa <= 17) || (estud === 's')) {
    console.log("Tarifa Meia");
} else if ((pessoa >= 18 && pessoa <= 59) || (estud === 's')){
    console.log("Tarifa Inteira");
} else if (pessoa >= 60) {
    console.log("Tarifa Gratuita");
} else {
    console.log("Tarifa Inteira");
}