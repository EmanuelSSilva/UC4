import promptSync from 'prompt-sync';
const prompt = promptSync();

let listaLoja = ["bermuda", "camiseta", "chinelo", "boné", "óculos", "sunga", "sandália", "regata", "calça", "vestido"]
let novaColecao = ["short", "cropped", "tênis", "bolsa", "jaqueta", "bota", "saia", "blusa", "meia", "chapéu"]

//console.log(listaLoja)
listaLoja.splice(4, 3,)
console.log(listaLoja)

console.log(listaLoja.concat(novaColecao))

let novaLista = listaLoja.concat(novaColecao)
console.log(novaLista.sort())

novaLista = prompt("digite a peça de roupa que deseja: ").toLowerCase()

let busca  = listaLoja.indexOf(novaLista)


if (busca === -1) {

    console.log("peça não encontrada")
    
}else{
   
    console.log(`Encontramos a peca na posição: ${busca}`)
}