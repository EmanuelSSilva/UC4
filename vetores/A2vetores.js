import promptSync from 'prompt-sync';
const prompt = promptSync();

"use strict";

let consoantes = [];
let vogais = [];

// laço de repetição
for (let i = 0; i < 15; i++) {
    let letra;
    do { //aqui digo usuario apenas letras
        letra = prompt(`Digite a ${i + 1}º letra : `).toLowerCase();
        if (!letra.match(/^[a-z]$/)) {
            console.log("Digite apenas uma letra (sem números ou símbolos)!");
            
        } // aqui as variaveis para armazenar consoantes e vogais
    } while (!letra.match(/^[a-z]$/));
    if (letra.match(/[aeiou]/)) {
        vogais.push(letra);
    } else {
        consoantes.push(letra);
    }
}
//console.log("Vogais: " vogais, "Consoantes: " consoantes );
console.log("Total de Vogais: " + vogais.length);
console.log("Total de Consoantes: " + consoantes.length);