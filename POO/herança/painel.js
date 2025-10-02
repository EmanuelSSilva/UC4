import PromptSync from "prompt-sync"
const prompt = PromptSync()



// // Cadastro do Dono
// const nomeDono = prompt("Informe o nome do Dono: ")
// const cpfDono = prompt("Informe o CPF do Dono: ")
// const patrimonioDono = Number(prompt("Informe o patrimônio inicial: "))
// const participacaoDono = Number(prompt("Informe a participação acionária (%): "))
// const dono = new Dono(nomeDono, cpfDono, patrimonioDono, participacaoDono)
// dono.mostrarInformacoes()
// dono.investir(Number(prompt("Quanto deseja investir no patrimônio? ")))
// dono.retirarLucros(Number(prompt("Qual percentual deseja retirar de lucros? ")))

// Cadastro de Funcionário
const nomeFunc = prompt("Informe o nome do Funcionário: ")
const cpfFunc = prompt("Informe o CPF do Funcionário: ")
const cargoFunc = prompt("Informe o cargo do Funcionário: ")
const salarioFunc = Number(prompt("Informe o salário do Funcionário: "))
const funcionario = new Funcionario(nomeFunc, cpfFunc, cargoFunc, salarioFunc)
funcionario.mostrarInformacoes()

// // Cadastro de Gerente
// const nomeGer = prompt("Informe o nome do Gerente: ")
// const cpfGer = prompt("Informe o CPF do Gerente: ")
// const cargoGer = prompt("Informe o cargo do Gerente: ")
// const salarioGer = Number(prompt("Informe o salário do Gerente: "))
// const setorGer = prompt("Informe o setor do Gerente: ")
// const gerente = new Gerente(nomeGer, cpfGer, cargoGer, salarioGer, setorGer)
// gerente.mostrarInformacoes()

// // Cadastro de Diretor
// const nomeDir = prompt("Informe o nome do Diretor: ")
// const cpfDir = prompt("Informe o CPF do Diretor: ")
// const cargoDir = prompt("Informe o cargo do Diretor: ")
// const salarioDir = Number(prompt("Informe o salário do Diretor: "))
// const departamentoDir = prompt("Informe o departamento do Diretor: ")
// const diretor = new Diretor(nomeDir, cpfDir, cargoDir, salarioDir, departamentoDir)
// diretor.mostrarInformacoes()