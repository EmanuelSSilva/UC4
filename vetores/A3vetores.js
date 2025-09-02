import promptSync from 'prompt-sync';
const prompt = promptSync();

let n1 = [];
let n2 = [];
let n3 = [];


for (let i = 0; i < 10; i++); {
    let paises = prompt(`Digite o nome da lista do  ${i + 1}º pais: `);
    n1.push(paises);

} for (let i = 0; i < 10; i++); {
    let paises2 = prompt(`Digite o nome da lista do  ${i + 1}º pais: `);
    n2.push(paises2);
} for (let i = 0; i < 10; i++); {
    
    n3.push(n1[i]);
    n3.push(n2[i]);
}    
    console.log("N1: " + n1);
    console.log("-------------------");
    console.log("N2: " + n2);
    console.log("-------------------");
    console.log("N3: " + n3);