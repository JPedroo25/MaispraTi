const prompt = require('prompt-sync')()

//1 - IMPRIMA A SEQUÊNCIA DE FIBONACCI ATÉ O 10º TERMO 0 1 1 2 3 5 8 13 21 34

// let num1 = 0
// let num2 = 1
// console.log(num1)
// console.log(num2)

// for(let i = 1; i <= 8; i++){
//     let num3 = num1 + num2
//     console.log (num3)
//     num1 = num2
//     num2 = num3
// }



//2 - VERIFIQUE SE UM NÚMERO É PRIMO

// let num1 = parseInt(prompt('Digite um número: '))
// let primo = 0

// for(let i = 1; i <= num1; i++){
//     if(num1 % i === 0){
//         primo++
//     } 
    
// }
// if (primo === 2) {
//     console.log("O número é primo")
// } else {
//     console.log("O número não é primo")
// }


// 3 - IMPRIMA UM TRIANGULO DE NÚMEROS

// let linhadetriangulo = parseInt(prompt('Digite um número: '))

// for(let i = 1; i <= linhadetriangulo; i++){
//     let linhas = " "

//     for(let j = 1; j <= i; j++){
//         linhas += j + " ";
//     }
//     console.log(linhas)
// }



//4 - CALCULE O FATORIAL DE UM NÚMERO

// let num = (Number(prompt("Digite um número: ")))
// let i = 1
// let fat = 1
// //1.2.3.4.5 

// while(i <= num){
//     fat = fat * i
//     i++
// }
// console.log(fat)


//5 - INVERTA OS DÍITOS DE UM NÚMERO

// let num = Number(prompt("Digite um número: "))
// let inv = 0

// while(num > 0){
//   let dig = num % 10
//   inv = (inv * 10) + dig   
//   num = (num - (num % 10)) / 10
// }
// console.log('sequencia de números foi invertida ', inv, '!!')

//6 - VERIFIQUE SE UM NÚMERO É PALÍNDROMO

// let num = Number(prompt('Digite um número: '))
// let inv = 0
// let palíndromo = num

// while(num > 0){
//   let dig = num % 10
//   inv = (inv * 10) + dig   
//   num = (num - (num % 10)) / 10
// }
// if(palíndromo === inv){
//   console.log("É palíndromo")
// }else(
//   console.log("Não é um palíndromo")
// )

//7 - CONTE O NÚMERO DE DÍGITOS DE UM NÚMERO

// let num = Number(prompt("Digite um número: "))
// let count = 0


// do{
//   num = (num - (num % 10)) / 10
//   count++
// }while(num > 0)
//   console.log(count)


//8 - CALCULE A SOMA DOS DÍGITOS DE UM NÚMERO

// let num = Number(prompt("Digite um número: "))
// let sum = 0

// do{
//   let dig = num % 10
//     sum += dig
//     num = (num - dig) / 10
//   }while(num > 0)
//     console.log(sum)

//9 - IMPRIMA UM PADRÃO DE ESTRELA DESCRESCENTE

// let quantidade = Number(prompt("Digite a quantidade: "))

// do{
//   let estrela = " "
//   let i = 0
//   while(i < quantidade){
//     estrela += "*"
//     i++
//   }
//   console.log(estrela)
//   quantidade--
// }while(quantidade > 0)


//10 - ENCONTRE O MAIOR DIVISOR COMUM (MDC) DE DOIS NÚMEROS

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do{
//     let temp = b
//     b = a % b
//     a = temp


// }while(b !== 0)

//     const MDC = a

//     console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)