import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Diretor {
    #participacaoLucros
    constructor (){
    super(nome, cpf, data_nascimento, cargo, salario, matricula, participacaoLucros, departamento,  tempoDeDirecao)

        this.#participacaoLucros = participacaoLucros
        this.departamento = departamento
        this.tempoDeDirecao = tempoDeDirecao

    }

    set participacaoLucros (participa){
        this.#participacaoLucros = participa
    }
    get participacaoLucros (){
        return this.#participacaoLucros
    }


    calculaGratificacao (){
        let escolha = prompt(`O diretor esta habilitado receber a participação de lucros: SIM OU NAO `).toLocaleLowerCase()
        if (escolha === "SIM" ){
            let anosDecasa = prompt(`Quantos anos de empresa você tem?`)
            if(anosDecasa > 5){
                

            }
        }     
    }
    
    


}