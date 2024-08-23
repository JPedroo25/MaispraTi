const prompt = require('prompt-sync')()

//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

// let num = Number(prompt("Digite um número: "))

// if(num % 2 === 0){
//     console.log("O número é par")
// }else{
//     console.log("O número é ímpar")
// }


//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

// let age = parseInt(prompt("Digite sua idade: "))

// if(age >= 0 && age < 12){
//     console.log("Você é uma criança")
// }else if(age >= 12 && age < 18){
//     console.log("Você é um adolescente: ")
// }else if(age >= 18 && age < 65){
//     console.log("Você é um adulto")
// }else if(age >= 65){
//     console.log("Você é um idoso")
// }else{
//     console.log("Idade inválida")
// }


//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = Number(prompt("Digite sua nota: "))

// if(nota >= 6){
//     console.log("Aprovado")
// }else{
//     console.log("Você está em recuperação")
// }

// if(nota < 6){
//     let notaDaRp = Number(prompt("Digite quanto você tirou na recuperação: "))
//     if(notaDaRp >= 6){
//         console.log("Você atingiu a nota necessária e foi aprovado")
//     }else{
//         console.log("Você não atingiu a nota necessária e foi reprovado")
//     }
// }


//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

// let opção = parseInt(prompt("Digite a opção desejada: "))

// switch(opção){
//     case 1:
//     console.log("Você selecionou a primeira opção")
//     break
//     case 2:
//     console.log("Você selecionou a segunda opção")
//     break
//     case 3:
//     console.log("Você selecionou a terceira opção")
//     break
//     default:
//     console.log("Você não selecionou nenhuma opção")
// }


//5. Escreva um programa que calcula o índice de MassaCorporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

// let altura = Number(prompt("Digite sua altura em metros ? "))  //ex: 1.80 metros
// let peso = Number(prompt("Qual o seu peso em Kg ? "))          //ex: 78 kg
// let imc = peso / altura**2

// if(imc < 18.5){
//    console.log('Abaixo do peso')
// }else if (imc >= 18.5 && imc <= 24.9){
//    console.log('Peso normal')
// }else if (imc >= 25 && imc <= 29.9){
//    console.log('Sobrepeso')
// }else if (imc >= 30 && imc <= 34.9){
//    console.log('Obesidade grau I')
// }else if (imc >= 35 && imc <= 39.9){
//    console.log('Obesidade grau II')
// }else if (imc >= 40){
//    console.log('Obesidade grau III')
// }


//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: isóceles, escaleno ou equilátero.
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//Triângulo Isósceles: possui dois lados iguais (A = B ou A = C ou B = C)
//Triângulo escaleno: possui todos os lados diferentes (A <> B e B <> C)
//Triângulo equilátero: possui todos os lados iguais (A = B e B = C)

// let ladoA = Number(prompt("Digite o valor do lado A: "))
// let ladoB = Number(prompt("Digite o valor do lado B: "))
// let ladoC = Number(prompt("Digite o valor do lado C: "))

// if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    
//     console.log("É um triângulo")

//     if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
//         console.log("O triângulo é Equilátero.")
//     }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
//         console.log("O triângulo é Escaleno.")
//     }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
//         console.log("O triângulo é Isósceles.")
// }
// }else{
//     console.log("Não é um triângulo")
// }


//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma duzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algorítimo que leia o número de maçãs compradas, e calcule e escreva o valor total da compra.

// let maçãsCompradas = parseInt(prompt("Digite quantas maçãs você comprou: "))

// if(maçãsCompradas < 12 && maçãsCompradas > 0){
//     ValorAPagar = maçãsCompradas * 0.30
//     console.log(`Você comprou ${maçãsCompradas} maçãs, e terá que pagar R$${ValorAPagar.toFixed(2)}.`)
// }else if(maçãsCompradas >= 12){
//     ValorAPagar = maçãsCompradas * 0.25
//     console.log(`Você comprou ${maçãsCompradas} maçãs, e terá que pagar R$${ValorAPagar.toFixed(2)}.`)
// }else{
//     console.log("Valor de maçãs inválido")
// }


//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// let num1 = Number(prompt("Digite um número: "))
// let num2 = Number(prompt("Digite outro número: "))

// if(num1 > num2){
//     console.log(num1, num2)
// }else if(num2 > num1){
//     console.log(num2, num1)
// }else{
//     console.log("Números inválidos")
// }


//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

// for(i = 10; i >= 1; i--){
//     console.log(i)
// }


//10. Escreva um algorítmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let num = parseInt(prompt("Digite um número: "))

// for(count = 0; count < 10; count++){
//     console.log(num)
// }


//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// let num = 0
// let sum = 0

// for(i = 0; i < 5; i++){
//     num = Number(prompt("Digite um número: "))
//     sum += num
// }
// console.log(sum)


//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

// let num = Number(prompt("Digite o número que você gostaria de saber a tabuada: "))

// for(i = 1; i <= 10; i++){
//     tabuada = num * i
//     console.log(tabuada)
// }


//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

// let sum = 0
// let count = 0
// let num = 1

// while(num != 0){
//     num = parseFloat(prompt("Digite um número: "))
//     if(num != 0){
//     sum += num
//     count++
//     }
// }

// let mediaAritmetica = sum / count

// console.log(mediaAritmetica)


//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

// let num = parseInt(prompt("Digite um número: "))

// fat = 1

// for(i = 0; i < num; i++){
//     fat += fat * i 
// }
// console.log(fat)


//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

// let num1 = 0
// let num2 = 1
// console.log(num1)
// console.log(num2)

// for(i = 0; i < 8; i++){
//     num3 = num1 + num2
//     console.log(num3)
//     num1 = num2
//     num2 = num3
// }