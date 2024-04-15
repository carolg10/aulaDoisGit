let nome = prompt("digite seu nome: ")
let idade = prompt("digite sua idade: ")
// MENSAGEM: Digite as horas que você trabalha por dia:
let horasTrabalho = prompt("digite as horas que você trabalha: ")
let salarioDia = prompt("digite seu salário diário")
// Verificando as variaveis
console.log(typeof nome)
console.log(typeof horasTrabalho)
console.log(typeof salarioDia)
// Convertendo o que é necessario 
let horasTrabNumber = Number(horasTrabalho)
let salDiaNumber = Number(salarioDia)
// Processando valores
let valHoraNumber = horasTrabNumber/salDiaNumber
// Conversão para não dar erro de NULL
let valorHora = String(valHoraNumber)
const mensagem = ("seu valor é ") + valorHora + "!!!"
// Verificando variaveis
console.log(typeof valorHora)
console.log(typeof mensagem)
console.log(mensagem)
//saida de valores para Front End
alert(mensagem)