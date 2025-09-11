import promptSync from 'prompt-sync';
import { calculaCaloria } from './exporfuncoes.js';
const prompt = promptSync();


let atividade = prompt('Qual a atividade que vc fez? (caminhada, corrida ou bicicleta) ')
let tempo = Number(prompt('Quantos minutos vc fez? '))

 
console.log(calculaCaloria(atividade, tempo))

