//xercicio 1 e 2
/*let num1 = prompt("Digite um número")
let num2 = prompt("Digite outro número")
if (num1 === num2){
    console.log("Esses números são iguais")
} else {
    console.log("Números diferentes")
}*/
 
//exercicio 3
/*let num1 = prompt("Digite o primiro número")
let num2 = prompt("Digite o segundo número")
if(num1 === num2){
    alert(`Números iguais`)
}else if (num1 > num2){
    alert(`${num1} é maior que ${num2}`)
}else if (num1 < num2){
    alert(`${num1} é menor que ${num2}`)
}*/

//exercicio 4
/*let tipoDePokemon = prompt("Digite um pokemon")
switch(tipoDePokemon){
    case 'Bulbasauro':
        alert("Planta e veneno")
        break
    case 'Charmander':
        alert("Fogo")
        break
    case 'Squirtle':
        alert("Agua")
        break
    default:
        alert("Pokemon não encontrado")
        break
}*/

//exercicio 5
/*let idade = Number(prompt("Qual sua idade?"))
let ensinoMedio = prompt("Concluiu o ensino médio? sim - não")
let faculdade = prompt("Esta na faculdade? sim - não")
if ((idade >= 18) && (ensinoMedio == "sim") && (faculdade == "não")){
    alert("Voce esta apto para entrar na faculdade")
} else{
    alert("Você não esta apto para entrar na faculdade")
}*/

// exercicios notion de escrita de código:
//1
/*let numero = Number(prompt("Digite sua idade."))
if (numero >= 18){
    alert("Voce pode dirigir!")
}else{
    alert("Voce não pode dirigir!")
}*/

//2 
/*let turno = prompt("Digite o turno que voce estuda: M para manha, V para tarde, N para noite")
if (turno == "M"){
    alert("Bom dia!!")
}else if (turno == "V"){
    alert("Boa Tarde!!")
}else if (turno == "N"){
    alert("Boa noite!!")
}*/

//3 
/*let turnoDeEstudo = prompt("Digite o turno que voce estuda: M para manha, V para tarde, N para noite")
switch (turnoDeEstudo){
    case 'M':
        alert("Bom dia!!")
        break
    case 'V':
        alert("Boa tarde!!")
        break
    case 'N':
        alert("Boa noite!!")
        break
    default:
        alert("Turno não encontrado")
        break
}*/

//4
/*let generoDoFilme
let precoDoFilme
generoDoFilme = prompt("Escolha o genêro do filme: ")
precoDoFilme = Number(prompt("Qual o valor do ingresso?"))
generoDoFilme = generoDoFilme.toUpperCase ()
if ((generoDoFilme === "FANTASIA") && (precoDoFilme <= 15)){
    alert("Bom filme!!")
}else {
    alert("Escoha outro filme!!")
}/*