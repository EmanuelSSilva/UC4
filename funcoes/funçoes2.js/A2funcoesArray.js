import PromptSync from "prompt-sync"
const prompt = PromptSync()

let nomes = ["bernardo", "Caio", "Diana", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Júlia"]
let media = [3.5, 2.0, 9.2, 6.5, 5.8, 4.0, 1.7, 8.1, 9.5]
let satus = ['Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo','Inativo','Ativo']
let mediageral
let result
let medialaunos
let buscarnome

console.log('\n==Lista de alunos====')
nomes.forEach((nomes, indice) => {
    console.log(nomes,' - Média:',media[indice],' - Status:',satus[indice])        
})
 
console.log('\n==Alunos aprovados====')
media.forEach((media, indice) => {
     if (media >= 7) {    
    console.log(nomes[indice],' - Média:',media)
    }        
})

console.log('\n=Soma das médias====')
mediageral = media.reduce((acumulador, resultado) => acumulador + resultado, 0)
console.log(mediageral.toFixed(2))


console.log('\n==Média da turma====')
let mediaDaTurma = media.reduce((acumulador, resultado) => acumulador + resultado, 0)
      mediaDaTurma = mediaDaTurma / media.length
      console.log(mediaDaTurma.toFixed(2))

console.log('\n==localizando Alunos====')
buscarnome = prompt('Digite o nome do aluno que deseja buscar: ')
result = nomes.find(nomes => nomes.toLowerCase() === buscarnome.toLowerCase())      
if(result){
    medialaunos = media[nomes.indexOf(result)]
    console.log(`O aluno ${result} foi encontrado, sua média é: ${medialaunos}`)
}
console.log('\n==verificando Status dos Alunos Ativos====')
satus.forEach((satus, indice) => {
    if (satus === 'Ativo') {    
   console.log(nomes[indice],' - Status:',satus)
   }        
}) 
console.log('\n==verificando Status dos Alunos Inativos====')
satus.forEach((satus, indice) => {
    if (satus === 'Inativo') {    
   console.log(nomes[indice],' - Status:',satus)
   }        
})

console.log('\n==Alunos abaixo da media 4====')
media.forEach((media, indice) => {
    if (media < 4) {    
   console.log(nomes[indice],' - Média:',media)
   }        
})
