import promptSync from 'prompt-sync';
const prompt = promptSync();

const senhas = ["123456789","fhsdjfhs","r8c2L!@#7d1","y3m6q2K9","n5T1#@!z7p8","J4d8#@!x2v6","w9P3!n1t7","A7b!x9Tq","m2R$4zLp","Q1w@8nZ#"]
let caracterEspecil = ['@', '#',  '%', '!']
//console.log(senhas)

for (let i = 0; i < senhas.length; i++) {
    let testesenha = senhas[i].split('');
    
    let temEspecial = false
    let temNumero = false
    let temMaiuscula = false
    
    
    for (let j = 0; j < testesenha.length; j++) {
    if (caracterEspecil.includes(testesenha)) {
        temEspecial = true
        
    }
    if (!isNaN(Number(testesenha[j]))) {
        temNumero = true
    }
    if (testesenha[j] !== testesenha[j].toLowerCase() && isNaN(testesenha[j])) {
       
        temMaiuscula = true
    }
}   
if (temEspecial && temNumero && temMaiuscula) {
    console.log(`A senha ${senhas[i]} é forte`)
}else{
    console.log(`A senha ${senhas[i]} é fraca`)
}
}