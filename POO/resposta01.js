import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Lampada {
  constructor() {
    this.acesa = false; 
    this.potencia = 60;   
  }


  acender() {
    this.acesa = true;
  }

  apagar() {
    this.acesa = false;
  }

  informarSituacao() {
    if (this.acesa) {
      console.log("A luz está acesa!");
    } else {
      console.log("A luz está apagada!");
    }
  }

  
  informarPotencia() {
    console.log(`A potência da lâmpada é: ${this.potencia}W`);
  }
}

  const minhaLampada = new Lampada ()
  let resposta = prompt("Digite 1 para ligar ou 0 para apagar")
  if (resposta == "1"){
    minhaLampada.acender()
  }else if(resposta == "0"){
    minhaLampada.apagar()
  }else{
    console.log("Não atendeu ")
  }
minhaLampada.informarSituacao()
minhaLampada.informarPotencia()