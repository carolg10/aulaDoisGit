// exercicio 1
/*const filme = {
    nome: "Homem aranha: No way home",
    ano: "2022",
    direcao: "Jon Watts",
    elenco: [
        "Zendaya Maree",
        "Tom Holland" ,
        "Andrew Garfield", 
        "Tobey Maguire", 
        "Jacob Batalon" 
    ] ,
    jaVi: "Sim"   
}

//exercicio 2
console.log(filme.elenco)
alert(filme["ano"]) */

/*const pessoa = {
    nome: "Ariana Grande" ,
    idade: "32" ,
    generoMusical: "pop"
}
console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.generoMusical)
console.log ("O nome dessa pessoa é:", pessoa.nome, "ela tem", pessoa.idade, "anos. E gosta muito de", pessoa.generoMusical)
*/

const filme = {
    nome: "Homem aranha: No way home",
    ano: "2022",
    direcao: "Jon Watts",
    elenco: [
        "Zendaya Maree",
        "Tom Holland" ,
        "Andrew Garfield", 
        "Tobey Maguire", 
        "Jacob Batalon" 
    ] ,
    personagens: [
        "MJ",
        "Homem-aranha 3",
        "Homem-aranha 2",
        "Homem aranha 1", 
        "Ned"        
    ] ,
    jaVi: "Sim"   
}
console.log(filme.nome)
console.log(filme.ano)
console.log(filme.direcao)
console.log(filme.elenco)
console.log(filme.jaVi)

let mensagem = ""
for(let i = 0; i <= 5; i++){
    mensagem = mensagem + filme.elenco[i] + " = " + filme.personagens[i] + "\n"

}
console.log(mensagem)

