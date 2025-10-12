import PromptSync from "prompt-sync"
const prompt = PromptSync()

export class QuartoOcupadoError extends Error {
    constructor(numero) {
        super(`O quarto ${numero} já está ocupado na data selecionada.`);
        this.name = "QuartoOcupadoError";
    }
}
function validandoCpf (cpf){
if(isNaN(Number(cpf)) ){
    throw new QuartoOcupadoError('Error! Precisa ser números!')
}
if(cpf.length !== 11){
    throw new QuartoOcupadoError('Error! Quantidade de caracteres insuficiente!')
}
return cpf

}