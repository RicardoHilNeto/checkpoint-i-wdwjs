// Exercício 1 / Como declarar uma variável com valor undefined em JavaScript? Exemplifique e demonstre a saída do valor da variável!
let num
console.log(num)

// Exercicio 2 / Como usar o operador % em JavaScript?Exemplifique e demonstre a saída!

//guardando alguns numeros dentro das variaveis
let num1 = 10
let num2 = 5
console.log("Fim do exercicio 1")
//guardando o resto da conta em uma variavel
resultado = !(num1 % num2)

//Condicionais para mostrar se o numero é par ou ímpar
if(resultado != 0){
    console.log("O numero é par")
}else{
    console.log("O numero é ímpar")
}
console.log("Fim do exercicio 2")

/** Exercicio 3 
 * Escreva  um  programa  que  calcula  o  índice  de  massa  corporal  (IMC)  de  uma  pessoa  e  exibe  uma
 * mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Considere as seguintes faixas de 
 * IMC:  abaixo  de  18,5  (abaixo  do  peso),  entre18,5  e  24,9  (peso  ideal)  e  acima  de  24,9  (acima  do  peso).
 * Exemplifique e demonstre a saída!
*/

//Declarando o valor do índice de massa corporal
let imc = 20

//Condicionais para mostrar as respostas de acordo com o imc
if(imc < 18.5){
    console.log("abaixo  do  peso")
}else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso ideal")
}else{
    console.log("Acima do peso")
}
console.log("Fim do exercicio 3")

/** Exercicio 4 
 * Faça um programa que receba idade de uma pessoa e exiba uma mensagem indicando em qual faixa
 * etária ela se encontra: criança (até 12 anos), adolescente (entre 13 e 18 anos), adulto (entre 19 e60 anos)
 * ou idoso (mais de 60 anos).Exemplifique e demonstre a saída
*/

//Declarando o valor da idade
let idade = 20

//Condicionais para mostrar as respostas de acordo com a idade
if(idade <= 12){
    console.log("Criança")
}else if(idade >= 13 && idade <= 18){
    console.log("Adolecente")
}else if(idade >= 19 && idade <= 60){
    console.log("Adulto")
}else{
    console.log("Idoso")
}
console.log("Fim do exercicio 4")

/**Execicio 5
 * Crie um programa que recebaum nome de usuário e uma senha e verifique se eles correspondem aos 
 * dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e
 * senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou 
 * se houve falha de autenticação.Exemplifique e demonstre a saída!
 */

//Declarando o login e senha
let login = "admin"
let senha = "1234"

//Condicionais para mostrar se o login e senha estão corretos
if(login == "admin" && senha == "1234"){
    console.log("O login foi realizado")
}else{
    console.log("Falha de autenticação")
}
console.log("Fim do exercicio 5")


/**Exercicio 6
 * Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno
 * foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6.Exemplifique e demonstre
 * a saída!
 */

//Declarando as notas do aluno
let nota1 = 6
let nota2 = 6
let nota3 = 6
let nota4 = 6
let nota5 = 6
let nota6 = 6
let nota7 = 6

//Calculando e armazenando a média do aluno
let media = (nota1 + nota2 + nota3 + nota4 + nota5 +nota6 + nota7) / 7

//Condicional para mostrar se o aluno foi aprovado ou não
if(media < 6){
    console.log("Reprovado")
}else{
    console.log("Aprovado")
}
console.log("Fim do exercicio 6")


/**Exercicio 7
 * Crie um botão em HTML e utilize o evento de clique em Javascript para alterar a cor de fundo da página
 * para verde. Para isso, utilize o código document.body.style.backgroundColor = 'green';dentro da função
 * do evento de clique.Exemplifique e demonstre a saída!
 */

//Pegando o botão pelo id
const btn = document.getElementById("btn");
    //adicionando evento com o addEventListener
    btn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});
//Fim do exercicio 7

/**Exercicio 8
 * Crie um programa em Javascript que contenha um evento em que, ao passar o mouse sobre uma div,
 * o texto e a cor de fundo da div são alterados. O aluno deverá criar a estrutura do evento e declarar o id da
 * div no HTML. Dica: para alterar o texto e a cor de fundo da div, utilize o método innerHTML para modificar 
 * o  conteúdo  da  div  e  a  propriedade  style.backgroundColor  para  alterar  a  cor  de  fundo. Exemplifique  e
 * demonstre a saída!
 */

//Pegando o texto no html pelo id
const txt = document.getElementById("texto")

//Adicinando um evento quando o mouse estiver em cima do texto com o addEventListener
txt.addEventListener("mouseover",function(){

    //Trocando os dados do texto
    txt.innerHTML = "NOVO TEXTO!";
    txt.style.backgroundColor = "grey"
    txt.style.color = "white"
})
//Fim do exercicio 8


/**
 * Exercicio 9
 * Crie eventos que  ao  passar  o  mouse  sobre  a  div  "box"e  ao  deixar  ela,  o  seu  conteúdo  seja trocado 
 * entre  "Olá"  e  "Tchau"  e  a  cor  de  fundo seja  alterada  entre  verde  e  amarelo(Você  já  tem  as  dicas  das 
 * questões anteriores que podem te auxiliar a resolver essa parte). Utilize o operador ternário para verificar 
 * qual conteúdo deve ser exibido e qual cor de fundo deve ser aplicada. Exemplifique e demonstre a saída!
 */

//Pegando o texto no html pelo id
const box = document.getElementById("box")

//Adicinando um evento quando o mouse estiver em cima do texto com o addEventListener
box.addEventListener("mouseover",function(){
    box.innerHTML === 'Olá' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "yellow"
})

//Adicinando um evento quando o mouse sair do texto com o addEventListener
box.addEventListener("mouseout",function(){
    box.innerHTML === 'Tchau' ? 'Tchau' : 'Olá';
    box.style.backgroundColor = "green"
})
//Fim do exercicio 9