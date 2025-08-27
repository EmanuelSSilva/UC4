import promptSync from 'prompt-sync'
const prompt = promptSync()


let velocidade = Number(prompt("Digite a velocidade do carro (em km/h): "));
let limite = Number(prompt("Digite a VELOCIDADE PERMITIDA: "));
 
if (velocidade > limite) {
    let excesso = velocidade - limite;
 
    if (excesso <= (limite * 0.1)) {
        console.log("ATENÇÃO: ACIMA DO PERMITIDO, MULTA LEVE");
    } else {
        console.log("ATENÇÃO: ACIMA DO PERMITIDO, MULTA GRAVE");
    }
} else {
    console.log("Velocidade dentro do limite permitido.");
}