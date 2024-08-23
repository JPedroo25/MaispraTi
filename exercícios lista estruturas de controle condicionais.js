const prompt = require('prompt-sync')()

//EXERCÍCIOS DE REFORÇO

//1: VERIFIQUE SE UM NÚMERO É POSITIVO, NEGATIVO OU ZERO

// let num = Number(prompt("Digite um número: "))

// if(num > 0){
//    console.log('O número é positivo')
// }
// if(num < 0){
//    console.log('O número é negativo')
// }
// if(num === 0){
//    console.log('O número é zero')
// }
// if(isNaN(num)){
//     console.log('Digite um número válido')
//  }


//2: VERIFIQUE SE UM ANO É BISSEXTO

// let anoBissexto = Number(prompt("Digie o ano escolhido: "))

// if (((anoBissexto % 4 === 0) && (anoBissexto % 100 !== 0)) || (anoBissexto % 400 === 0)){
//     console.log('O ano é bissexto')
// }
// if (!(((anoBissexto % 4 === 0) && (anoBissexto % 100 !== 0)) || (anoBissexto % 400 === 0))){
//     console.log("O ANO Não É BISSEXTO")
// }



//3: CALCULE A MÉDIA DE TRÊS NÚMEROS E DETERMINE O CONCEITO


// let notaA = Number(prompt("Digite a primeira nota: "))
// let notaB = Number(prompt("Digite a segunda nota: "))
// let notaC = Number(prompt("Digite a terceira nota: "))
// let media = ((notaA + notaB + notaC) / 3)

// if(media === 10){
//    console.log('Nota A')
// }else if(media < 10 && media >= 7.5){
//    console.log('Nota B')
// }else if(media < 7.5 && media >= 5.5){
//     console.log('Nota C')
// }else if(media < 5.5 && media >= 3.5){
//     console.log('Nota D')
// }else if(media < 3.5 && media > 0){
//     console.log('Nota E')
// }else if(media === 0){
//     console.log('Nota F')
// }


//4:VERIFIQUE SE UM NÚMERO É PAR OU ÍMPAR

// let num = 5
// if(num % 2 === 0){
//     console.log('O número é par')
// }else{
//     console.log('O número é Ímpar')
// }



//5: VERIFIQUE A CATEGORIA DE UM NADADOR

// let idade = Number(prompt('Digite uma idade: '))

// if(idade >= 5 && idade <= 7){
//    console.log('INFANTIL A')
// }else if(idade >= 8 && idade <= 10){
//    console.log('infantil b')
//    }else if(idade >= 11 && idade <= 13){
//       console.log('juvenil a')
//    }else if(idade >= 14 && idade <= 17){
//       console.log('juvenil b')
//    }else if(idade >= 18){
//       console.log('adulto')
//    } else{
//       console.log('Não pode competir, pois é muito jovem')
//    }




//6: VERIFIQUE O DIA DA SEMANA

// let diasdasemana = Number(prompt('Digite o dia da semana: '))
// switch (diasdasemana) {
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda-Feira')
//         break
//     case 3:
//         console.log('Terça-Feira')
//         break
//     case 4:
//         console.log('Quarta-Feira')
//         break
//     case 5:
//         console.log('Quinta-Feira')
//         break
//     case 6:
//         console.log('Sexta-Feira')
//         break
//     case 7:
//         console.log('Sábado')
//         break
//     default:
//         console.log('Esse dia não existe')
// }


//7: CALCULE O VALOR DE UMA EXPRESSÃO MATEMÁTICA SIMPLES

// let num1 = Number(prompt('Insira um número: '))
// let num2 = Number(prompt('Insira outro número: '))
// let operador = (prompt('Insira uma operação(+, -, *, /): '))

// switch(operador){
//    case "+":
//       console.log(num1 + num2)
//       break
//    case "-":
//       console.log(num1 - num2)
//       break
//    case "*":
//       console.log(num1 * num2)
//       break
//    case "/":
//       console.log(num1 / num2)
// }


//8: VERFIQUE A ESTAÇÃO DO ANO

// let estação = Number(prompt('Digite o número da estação: '))

// switch(estação){
//    case 1:
//       console.log('Primavera')
//       break
//    case 2:
//       console.log('Verão')
//       break
//    case 3:
//       console.log('Outono')
//       break
//    case 4:
//       console.log('Inverno')
//       default: console.log('Essa estação não existe')
// }



//9: VERIFIQUE A FAIXA ETÁRIA DE UMA PESSOA

// let idade = parseInt(prompt('Digite sua idade: '))
// let faixaEtaria

// if(idade >= 0 && idade <= 12){
//    faixaEtaria = "Criança"
// }else if(idade >= 13 && idade <=17){
//    faixaEtaria = "Adolescente"
// }else if(idade >= 18 && idade <= 59){
//    faixaEtaria = "Adulto"
// }else if(idade >= 60){
//    faixaEtaria = "Idoso"
// }else if(idade < 0){
//    faixaEtaria = "Idade inválida"
// }
// switch(faixaEtaria){
//     case "Criança": console.log('Você é uma criança')
//     break
//     case "Adolescente": console.log('Você é um adolescente')
//     break
//     case "Adulto": console.log('Você é um adulto')
//     break
//     case "Idoso": console.log('Você é um idoso')
//     break
//     case "Idade inválida": console.log('Idade inválida')
//     break
// }


//10: CALCULE O IMC E DETERMINE A CATEGORIA

// let altura = Number(prompt("Digite sua altura em metros ? "))
// let peso = Number(prompt("Qual o seu peso em Kg ? "))
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