import PromptSync from "prompt-sync" 
const prompt = PromptSync() 

let artigo = []
const ofensi = ["bosta", "poscaria", "idiotice"]
let ofensiRef
let recons 
let totalOfens

let jornalista = prompt(`Informe o texto que deseja digitar: `)
artigo = jornalista.split(" ")

recons = artigo.map(ofensiRef => ofensi.includes(ofensiRef.toLocaleLowerCase()) ? "***" : ofensiRef)
    //artigo.includes("porcaria")
totalOfens = artigo.filter(ofensiRef => ofensi.includes(ofensiRef)).length

    console.log(artigo)
    console.log(recons)
    console.log(totalOfens)