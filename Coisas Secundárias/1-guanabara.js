const prompt = require('prompt-sync')()

//PASSO 1 - SEQUÊNCIAS BÁSICAS

//1

// console.log("Olá, mundo!")


//2

// let nome = prompt("Digite seu nome: ")
// console.log(`Olá ${nome}, é um prazer te conhecer!`)


//3

// let nome = prompt("Digite seu nome: ")
// let salário = Number(prompt("Digite seu salário: "))
// console.log(`O funcionário(a) ${nome} tem um salário de ${salário} reais mensais.`)


//4

// let num1 = parseInt(prompt("Digite o primeiro número: "))
// let num2 = parseInt(prompt("Digite o segundo número: "))
// let soma = num1 + num2
// console.log(soma)


//5

// let nota1 = Number(prompt('Digite a primeira nota: '))
// let nota2 = Number(prompt('Digite a segundo nota: '))
// let media = (nota1 + nota2) / 2
// console.log(media)


//6

// let num = parseInt(prompt('Digite um número: '))
// let antecessor = (num - 1)
// let sucessor = (num + 1)
// console.log(`Seu antecessor é ${antecessor}, e seu sucessor é ${sucessor}`)


//7

// let num = Number(prompt("Digite um número: "))
// let dobro = num * 2
// let terço = num / 3
// console.log(`Seu dobro é ${dobro}, e sua terça parte é ${terço}`)


//8

// let dis = Number(prompt("Digite uma distância em metros: "))
// let km = dis / 1000
// let hm = dis / 100
// let Dam = dis / 10
// let dm = dis * 10
// let cm = dis * 100
// let mm = dis * 1000

// console.log(`Essa distância, em metros, equivale a: 
// ${km}km
// ${hm}hm
// ${Dam}Dam
// ${dm}dm
// ${cm}cm
// ${mm}mm
//  `)


//9

// let real = Number(prompt("Digite quantos REAIS você tem na sua carteira: "))
// let dólar = real / 3.45
// console.log(`Você tem, em reais, o equivalente a ${dólar} dólares na sua carteira.`)


//10

// let largura = Number(prompt("Digite a largura da parede: "))
// let altura = Number(prompt("Digite a altura da parede: "))
// let area = altura * largura
// let litroDeTinta = area / 2
// console.log(litroDeTinta) 


//11

// let a = Number(prompt("Digite o valor a: "))
// let b = Number(prompt("Digite o valor b: "))
// let c = Number(prompt("Digite o valor c: "))

// let delta = (b*b) - (4 * a * c)

// console.log(delta)


//12

// let preço = Number(prompt("Digite o preço do produto: "))

// let promoção = preço * (5/100)
// let preçoPromocional = preço - promoção

// console.log(preçoPromocional)


//13

// let salario = Number(prompt("Digite o valor do salário: "))

// let aumento = salario * (15/100)
// let salarioAumentado = salario + aumento

// console.log(salarioAumentado)


//14

// let quilometro = Number(prompt("Digite quantos km o carro percorreu: "))
// let diasAlugados = Number(prompt("Digite a quantidade de dias que esse carro foi alugado: "))

// let preçoAPagar = (quilometro * (20/100)) + (diasAlugados * 90)

// console.log(preçoAPagar)


//15

// let diasTrabalhados = parseInt(prompt("Digite quantos dias você trabalhou neste mês: "))

// let horas = 8
// let diaria = horas * 25
// let salario = diasTrabalhados * diaria

// console.log(salario)


//16[DESAFIO]

// let cigarrosPorDia = parseInt(prompt("Digite quantos cigarros você fuma por dia: "))
// let anosFumando = parseInt(prompt("Digite a quanidade de anos que você fuma: "))

// let cigarrosConsumidos = cigarrosPorDia * (anosFumando * 365)
// let minutosPerdidos = cigarrosConsumidos * 10
// let horasPerdidas = (minutosPerdidos / 60)
// let diasPerdidos = (horasPerdidas / 24)

// console.log(`Você perdeu ${Math.round(diasPerdidos)} dias de vida devido ao cigarro!`)


//PASSO 2 - CONDIÇÕES BÁSICAS

//17

// let velocidade = Number(prompt("Digite a velocidade que seu carro estava: "))

// let multa = velocidade * 5

// if(velocidade > 80){
//     console.log("Você foi multado")
//     console.log(`O valor da multa é de ${multa} reais`)
// }else{
//     console.log("Você não foi multado, continue assim!")
// }


//18

// let nascimento = parseInt(prompt("Digite o ano que você nasceu: "))

// let idade = 2024 - nascimento

// if(idade >= 18){
//     console.log("Pode votar")
// }else{
//     console.log("Não pode votar")
// }


//19

// let nota1 = Number(prompt("Digite sua primeira nota: "))
// let nota2 = Number(prompt("Digite sua segunda nota: "))

// let media = (nota1 + nota2) / 2

// if(media >= 7){
//     console.log("Teve um bom aproveitamento")
// }else{
//     console.log("Não teve um bom aproveitamento")
// }


//20

// let num = parseInt(prompt("Digite um número: "))

// if(num % 2 === 0){
//     console.log("O número é par")
// }else{
//     console.log("O número é ímpar")
// }


//21

// let ano = parseInt(prompt("Digite o ano: "))

// if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
//     console.log('O ano é bissexto')
// }
// if (!(((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0))){
//     console.log("O ano Não é bissexto")
// }


//22

// let nascimento = parseInt(prompt("Digite o ano que você nasceu: "))

// let idade = 2024 - nascimento

// if(idade >= 18){
    
//     let anosAposOAlistamento = idade - 18

//     console.log(`Você se alistou à ${anosAposOAlistamento} ano(s)`)

// }else if(idade < 18){
    
//     let anosAntesDoAlistamento = 18 - idade
    
//     console.log(`Ainda faltam ${anosAntesDoAlistamento} ano(s) para você se alistar`)
// }


//23

// let sexo = prompt("Digite o seu sexo: ")
// let compras = Number(prompt("Digite quanto você gastou nas suas compras: "))

// let promoHomens = compras * (5/100)
// let promoMulheres = compras * (13/100)

// if(sexo === "Masculino"){
//     precoComDescontoH = compras - promoHomens
//     console.log(precoComDescontoH)
// }else if(sexo === "Feminino"){
//     precoComDescontoF = compras - promoMulheres
//     console.log(precoComDescontoF)
// }


//24

//let distânciaEmKM = Number(prompt("Digite quantos Km você percorreu: "))

// if(distânciaEmKM <= 200){
//     preço = distânciaEmKM * (50/100)
//     console.log(preço)
// }else{
//     preço = distânciaEmKM * (45/100)
//     console.log(preço)
// }


//25 [DESAFIO]

// let comprimentoA = Number(prompt("Digite o comprimento da primeira reta: "))
// let comprimentoB = Number(prompt("Digite o comprimento da segunda reta: "))
// let comprimentoC = Number(prompt("Digite o comprimento da terceira reta: "))

// if(comprimentoA < comprimentoB + comprimentoC && comprimentoB < comprimentoA + comprimentoC && comprimentoC < comprimentoA + comprimentoB){
//     console.log("É possível formar um triângulo")
// }else{
//     console.log("Não é possível formar um triângulo")
// }


//PASSO 03 - CONDIÇÕES COMPOSTAS

//26

// let num1 = Number(prompt("Digite um número: "))
// let num2 = Number(prompt("Digite outro número: "))

// if(num1 > num2){
//     console.log("O primeiro número é maior.")
// }else if(num2 > num1){
//     console.log("O segundo número é maior.")
// }else{
//     console.log("Não existe valor maior, os dois são iguais.")
// }


//27

// let notaA = Number(prompt("Digite sua primeira nota: "))
// let notaB = Number(prompt("Digite sua segunda nota: "))
// let media = (notaA + notaB) / 2

// if(media > 0 && media <= 4.9){
//     console.log("REPROVADO")
// }else if(media >= 5 && media <= 6.9){
//     console.log("RECUPERAÇÃO")
// }else if(media >= 7){
//     console.log("APROVADO")
// }else{
//     console.log("Nota negativa, nota inválida.")
// }


//28

// let largura = Number(prompt("Digite a largura do terreno: "))
// let comprimento = Number(prompt("Digite o comprimento do terreno: "))
// let area = largura * comprimento

// if(area > 0 && area < 100){
//     console.log("TERRENO POPULAR.")
// }else if(area >= 100 && area <= 500){
//     console.log("TERRENO MASTER.")
// }else if(area > 500){
//     console.log("TERRENO VIP.")
// }else{
//     console.log("Terreno com área negativa, terreno inválido.")
// }


//29

// let nome = prompt("Digite seu nome: ")
// let salário = Number(prompt("Digite seu salário: "))
// let tempoNaImpresa = parseInt(prompt("Digite quanto tempo você está na empresa: "))

// if(tempoNaImpresa > 0 && tempoNaImpresa < 3){
//     aumento = salário * 0.03
//     novoSalário = aumento + salário
//     console.log(`Parabéns ${nome}!! Você recebeu um aumento de 3%, e agora seu salário é de R$ ${novoSalário.toFixed(2)}`)
// }else if(tempoNaImpresa >= 3 && tempoNaImpresa < 10){
//     aumento = salário * 0.125
//     novoSalário = aumento + salário
//     console.log(`Parabéns ${nome}!! Você recebeu um aumento de 12.5%, e agora seu salário é de R$ ${novoSalário.toFixed(2)}`)
// }else if(tempoNaImpresa > 10){
//     aumento = salário * 0.20
//     novoSalário = aumento + salário
//     console.log(`Parabéns ${nome}!! Você recebeu um aumento de 20%, e agora seu salário é de R$ ${novoSalário.toFixed(2)}`)
// }else{
//     console.log("Seu tempo na empresa é negativo, tempo inválido.")
// }


//30[DESAFIO]

// let comprimentoA = Number(prompt("Digite o comprimento da primeira reta: "))
// let comprimentoB = Number(prompt("Digite o comprimento da segunda reta: "))
// let comprimentoC = Number(prompt("Digite o comprimento da terceira reta: "))

// if(comprimentoA < comprimentoB + comprimentoC && comprimentoB < comprimentoA + comprimentoC && comprimentoC < comprimentoA + comprimentoB){
//     console.log("É possível formar um triângulo")
//     if(comprimentoA === comprimentoB && comprimentoB === comprimentoC){
//         console.log("O triângulo é Equilátero.")
//     }else if(comprimentoA === comprimentoB  || comprimentoA === comprimentoC || comprimentoB === comprimentoC){
//         console.log("O triângulo é Isósceles.")
//     }else if(comprimentoA != comprimentoB && comprimentoA != comprimentoC && comprimentoB != comprimentoC){
//         console.log("O triângulo é Escaleno.")
//     }
// }else{
//     console.log("Não é possível formar um triângulo")
// }


//31[DESAFIO]

// let jogador1 = prompt("Escolha entre 1, 2 ou 3: ")
// let jogador2 = prompt("Escolha entre 1, 2 ou 3: ")
// pedra = 1
// papel = 2
// tesoura = 3

// if(jogador1 == 2 && jogador2 == 1){
//     console.log("O jogador 1 venceu!")
// }else if(jogador1 == 2 && jogador2 == 3){
//     console.log("O jogador 2 venceu!")
// }else if(jogador1 == 2 && jogador2 == 2){
//     console.log("Houve um empate!")
// }else if(jogador1 == 1 && jogador2 == 3){
//     console.log("O jogador 1 venceu!")
// }else if(jogador1 == 1 && jogador2 == 1){
//     console.log("Houve um empate!")
// }else if(jogador1 == 3 && jogador2 == 3){
//     console.log("Houve um empate!")
// }else if(jogador1 == 1 && jogador2 == 2){
//     console.log("O jogador 2 venceu!")
// }else if(jogador1 == 3 && jogador2 == 1){
//     console.log("O jogador 2 venceu!")
// }else if(jogador1 == 3 && jogador2 == 2){
//     console.log("O jogador 1 venceu!")
// }else{
//     console.log("Opção inválida, não é possível jogar jokenpo.")
// }


//32[DESAFIO]

// NumeroAleatorio = parseInt(Math.random() * 5) + 1

// let NumeroEscolhido = parseInt(prompt("Dê o seu chute, de 1 a 5: "))

// if(NumeroAleatorio === NumeroEscolhido){
//     console.log("Você acertou! Parabéns!")
// }else{
//     console.log("Você errou, que pena, mais sorte da proxima vez!")
// }


//33

// let valorDaCasa = Number(prompt("Digite o valor da casa: "))
// let seuSalário = Number(prompt("Digite seu salário: "))
// let meses = parseInt(prompt("Digite em quantos meses você vai pagar: "))

// let prestaçãoMensal = valorDaCasa / meses
// let trintaPorCento = seuSalário * 0.30

// if(prestaçãoMensal > trintaPorCento){
//     console.log("Empréstimo negado.")
// }else if(prestaçãoMensal <= trintaPorCento){
//     console.log("Empréstimo aprovado.")
// }


//34

// let altura = Number(prompt("Digite sua altura em metros: "))
// let peso = Number(prompt("Digite seu peso em kilos: "))

// imc = peso / altura**2

// if(imc > 0 && imc < 18.5){
//     console.log("Abaixo do peso.")
// }else if(imc >= 18.5 && imc < 25){
//     console.log("Peso ideal.")
// }else if(imc >= 25 && imc < 30){
//     console.log("Sobrepeso.")
// }else if(imc >= 30 && imc < 40){
//     console.log("Obesidade")
// }else if(imc >= 40){
//     console.log("Obesidade mórbida.")
// }else{
//     console.log("Impossível calcular o IMC.")
// }


//35

// let carro = prompt("Digite qual o tipo de carro que você alugou: ")
// let km = Number(prompt("Digite quantos km você percorreu com o carro alugado: "))
// let dias = parseInt(prompt("Digite quantos dias você alugou: "))

// if(carro === "Popular"){
//     valorCarro = 90 * dias
//     if(km > 0 && km <= 100){
//         valorKm = km * 0.20
//         totalKm = valorCarro + valorKm
//         console.log(totalKm)
//     }else if(km > 100){
//         valorKm = km * 0.10
//         totalKm = valorCarro + valorKm
//         console.log(totalKm)
//     }else if(km <= 0){
//         console.log(valorCarro)
//     }
// }else if(carro === "Luxo"){
//     valorCarro = 150 * dias
//     if(km > 0 && km <= 200){
//         valorKm = km * 0.30
//         totalKm = valorCarro + valorKm
//         console.log(totalKm)
//     }else if(km > 200){
//         valorKm = km * 0.25
//         totalKm = valorCarro + valorKm
//         console.log(totalKm)
//     }else if(km <= 0){
//         console.log(valorCarro)
//     }
// }else{
//     console.log("Carro inválido.")
// }


//36

// let horas = parseInt(prompt("Digite quantas horas você fez de exercício hoje: "))

// if(horas > 0 && horas < 10){
//     pontos = horas * 2
//     let dinheiro = pontos * 0.05
//     console.log(`Parabéns, devido ao seu esforço e dedicação, você ganhou R$${dinheiro}!`)
// }else if(horas >= 10 && horas <= 20){
//     pontos = horas * 5
//     let dinheiro = pontos * 0.05
//     console.log(dinheiro)
// }else if(horas > 20){
//     pontos = horas * 10
//     let dinheiro = pontos * 0.05
//     console.log(dinheiro)
// }else{
//     console.log("Nãoé possível fazer o cálculo.")
// }


//37

// let salarioAtual = Number(prompt("Digite seu salário atual: "))
// let genero = prompt("Digite qual o seu gênero(homem/mulher): ")
// let anosNaEmpresa = parseInt(prompt("Digite quantos anos você está na empresa: "))

// let mulherAumento1 = salarioAtual * 0.05
// let mulherAumento2 = salarioAtual * 0.12
// let mulherAumento3 = salarioAtual * 0.23

// let homemAumento1 = salarioAtual * 0.03
// let homemAumento2 = salarioAtual * 0.13
// let homemAumento3 = salarioAtual * 0.25


// if(genero === "mulher"){
//     if(anosNaEmpresa > 0 && anosNaEmpresa < 15){
//         novoSalario = salarioAtual + mulherAumento1
//         console.log(novoSalario)
//     }else if(anosNaEmpresa >= 15 && anosNaEmpresa <= 20){
//         novoSalario = salarioAtual + mulherAumento2
//         console.log(novoSalario)
//     }else if(anosNaEmpresa > 20){
//         novoSalario = salarioAtual + mulherAumento3
//         console.log(novoSalario)
//     }else{
//         console.log("Impossível fazer o cálculo.")
//     }
// }else if(genero === "homem"){
//     if(anosNaEmpresa > 0 && anosNaEmpresa < 20){
//         novoSalario = salarioAtual + homemAumento1
//         console.log(novoSalario)
//     }else if(anosNaEmpresa >= 20 && anosNaEmpresa <= 30){
//         novoSalario = salarioAtual + homemAumento2
//         console.log(novoSalario)
//     }else if(anosNaEmpresa > 30){
//         novoSalario = salarioAtual + homemAumento3
//         console.log(novoSalario)
//     }else{
//         console.log("Impossível fazer o cálculo.")
//     }
// }else{
//     console.log("Gênero inválido para o cálculo.")
// }


//PASSO 04 - REPETIÇÕES ENQUANTO

//38

// let num = 6
// while(num <= 11){
//     console.log(num)
//     if(num === 11){
//         console.log("Acabou!")
//     }
//     num++
// }


//39

// let num = 10
// while(num > 2){
//     console.log(num)
//     if(num === 3){
//         console.log("Acabou!")
//     }
//     num--
// }


//40

// let num = 0
// while(num <= 18){
//     console.log(num)
//     if(num === 18){
//         console.log("Acabou!")
//     }
//     num += 3
// }


//41

// let num = 100
// while(num >= 0){
//     console.log(num)
//     if(num === 0){
//         console.log("Acabou!")
//    }
//    num -= 5
// }


//42

// let NumeroEscolhido = parseInt(prompt("Digite o número positivo que quiser: "))
// let num = 1

// while(num <= NumeroEscolhido){
//     console.log(num)
//     if(num === NumeroEscolhido){
//         console.log("Acabou!")
//     }
//     num++
// }


//43

// let num = 30
// while(num >= 1){
//     if(num % 4 === 0){
//         console.log(`[${num}]`)
//     }else{
//         console.log(num)
//     }
//     num--
// }


//44

// let inicio = parseInt(prompt("Digite o número inicial: "))
// let final = parseInt(prompt("Digite o número final: "))
// let incremento = parseInt(prompt("Digite o incremento: "))

// while(inicio <= final){
//     console.log(inicio)
//     if(inicio === final){
//         console.log("Acabou!")
//     }
//     inicio += incremento
// }


//45

// let inicio = parseInt(prompt("Digite o número inicial: "))
// let final = parseInt(prompt("Digite o número final: "))
// let incremento = parseInt(prompt("Digite o incremento: "))

// if(inicio < final){
// while(inicio <= final){
//     console.log(inicio)
//     if(inicio === final){
//         console.log("Acabou!")
//     }
//     inicio += incremento
//     }
// }else if(inicio > final){
// while(inicio >= final){
//     console.log(inicio)
//     if(inicio === final){
//         console.log("Acabou!")
//     }
//     inicio -= incremento
//     }
// }else{
//     console.log(inicio)
//     console.log("Acabou!")
// }


//46

// let num = 6
// let soma = 0
// while(num <= 100){
//     console.log(num)
//     soma += num
//     num += 2
// }
// console.log(soma)


//47

// let num = 500
// let soma = 0
// while(num >= 0){
//     console.log(num)
//     soma += num
//     num -= 50
// }
// console.log(soma)


//48

// let sum = 0
// for(let i = 0; i < 7; i++){
//     num = parseInt(prompt("Digite um número: "))
//     sum += num
// }
// console.log(sum)


//49

// let par = 0
// let impar = 0
// for(let i = 0; i < 6; i++){
//     num = parseInt(prompt("Digite um número: "))
//     if(num % 2 === 0){
//         par++
//     }else {
//         impar++
//     }
// }
// console.log(`Temos ${par} números pares e ${impar} ímpares.`)


//50

// let numerosMaioresQue5 = 0
// let numerosDivisiveisPor3 = 0
// for(let i = 0; i < 20; i++){
//     let numeroAleatorio = Math.floor(Math.random() * 10)
//     console.log(numeroAleatorio)
//     if(numeroAleatorio > 5){
//         numerosMaioresQue5++
//     }
//     if(numeroAleatorio % 3 === 0){
//         numerosDivisiveisPor3++
//     }
// }
// console.log(`Temos ${numerosMaioresQue5} números maiores que cinco e ${numerosDivisiveisPor3} números divisíveis por três.`)


//51

// let maior = Number.NEGATIVE_INFINITY
// let menor = Number.POSITIVE_INFINITY

// for (let i = 0; i < 8; i++) {
//     let numero = parseFloat(prompt("Digite um número:"));

//     if (numero > maior) {
//         maior = numero
//     }
//     if (numero < menor) {
//         menor = numero
//     }
// }


// console.log(`O maior número é: ${maior}`)
// console.log(`O menor número é: ${menor}`)


//52

// let maiorDeDezoito = 0
// let menosDeCinco = 0
// let soma = 0
// let quanidadeDePessoas = 0
// let maior = 0
// for(let i = 0; i < 10; i++){
//     idade = parseInt(Number(prompt("Digite sua idade: ")))
//     soma += idade
//     quanidadeDePessoas++
//     if(idade > 18){
//         maiorDeDezoito++
//     } else if(idade < 5){
//         menosDeCinco++
//     }

//     if(idade >= maior){
//         maior = idade
//     }
// }

// let media = soma / quanidadeDePessoas

// console.log(`A média de idade do grupo é de ${media}`)
// console.log(`O número de pessoas maiores de 18 anos é de ${maiorDeDezoito}`)
// console.log(`O número de pessoas menores de 5 anos é de ${menosDeCinco}`)
// console.log(`A maior idade foi de ${maior} anos`)