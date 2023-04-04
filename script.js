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