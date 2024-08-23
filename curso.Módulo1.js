//num1 = 5
//num2 = 10
//console.log(num1 - num2)
//console.log(10 > 5)
//console.log(10 < 5)
//console.log(10 == 5)
//console.log(10 == '10')
//console.log(10 != '10')
//console.log(10 !== '10')

//Operadores Lógicos

//console.log((10 < 5) && (10 > 2))   //e = &&
//console.log((10 > 5) || (10 < 2))   //ou = ||
//console.log((10 > 5) || !(10 < 2))  //! = negação
//console.log(!(10 > 5) || (10 < 2))

//let user = "João"
//let password = "1234"
//let authentication = user === 'João' && password === '1234'

//console.log(authentication)


// const grade = 4

//if(grade >= 60){
//    console.log('APROVADO')
//}

//console.log('Fim do código')

// if(grade >= 60){
//     console.log('APROVADO')
// } else {
//     console.log('REPROVADO')
// }

// let age = 25
// if((age >= 18) && (age <= 32)){
//     console.log('Pode fazer o concurso')
// } else{
//     console.log('Não pode')
// }

// <condiçao> ? <verdadeiro> : <falso>
//Let ternaryResult = (10 < 100) ? 'Verdadeira' : 'Falsa'

//let numero = (11)
//const parOUimpar = (numero % 2 === 0) ? console.log('número par') : console.log('Número impar')   //EXERCÍCIO 1



// Exercício 2


// let num1 = 5
//  let num2 = 6
//  let num3 = 8

// if((num1 > num2) && (num1 > num3)){
//     console.log('o primeiro valor é o maior')   
// } else if((num2 > num1) && (num2 > num3)){
//     console.log('O segundo número é o maior')
//     } else if((num3 > num1) && (num3 > num2)){
//         console.log('O terceiro número é o maior')
//     } else if((num3 == num2) || (num3 == num1) || (num2 == num1)){
//         console.log('Temos dois ou mais valores iguais')
//    } 



//EXERCÍCIO 3

//     let num1 = 3
//     let num2 = 2
//     let calc = 4
//     if(calc === 1){
//         console.log(num1 + num2)           
//     } else if(calc === 2) {
//         console.log(num1 - num2)
//     } else if(calc === 3) {
//         console.log(num1 * num2)
//     } else if(calc === 4) {
//         if(num2 != 0){
//             console.log(num1 / num2)
//         } else{
// console.log('não é possível dividir por zero')
//         }
//     } else{
//         console.log('Opção inválida')
//     }




// const prompt = require('prompt-sync')()

//     let num1 = Number(prompt("Insira o primeiro valor: "))
//     let num2 = Number(prompt('Insira o segundo valor: '))
//     let operation = prompt('Informe a operação desejada (=, -, /, *): ')
//     let result = 0

// if(operation === '+') {
//     result = num1 = num2
// }else if(operation === '-'){
//     result = num1 - num2
// }else if(operation === '*'){
//     result = num1 * num2
// }else if(opertation === '/'){
//     result = num1 / num2
// }else {
//     console.log('Calculo inválido')
// }






// let option = 0

// switch(option){
// case 1:
//         console.log('Você selecionou a primeira opção')
//     break
//         case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//         default:
//             console.log('Você não selecionou nenhuma das opções')
//             break
//         }




//EXERCÍCIO 4

// let option = 5

// switch(option){
//     case 1:
//         console.log('Domingo')
//         break
//         case 2:
//         console.log('Segunda-Feira')
//         break
//         case 3:
//             console.log('Terça-Feira')
//             break
//             case 4:
//                 console.log('Quarta-Feira')
//                 break
//                 case 5:
//                     console.log('Quinta-Feira')
//                     break
//                     case 6:
//                         console.log('Sexta-Feira')
//                         break
//                         case 7:
//                             console.log('Sábado')
//                             break
//                             default:
//                                 console.log('Esse dia não existe')
//                            }





//Exercício 5

const prompt = require('prompt-sync')()

// let diasenoites = Number(prompt('Digite o número do mês(De 1 até 12): '))

// switch(diasenoites){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 9:
//     case 11:
//         console.log('O mês tem 31 dias')
//         break
//     case 4:
//     case 6:
//     case 8:
//     case 10:
//     case 12:
//         console.log('O mês tem 30 dias')
//         break
//     case 2:
//         console.log('O mês tem 28 dias')
//         break
//     default:
//         console.log('Mês inválido')
// }








// let num1 = prompt('imforme o primeiro valor: ')
// let num2 = prompt('informe o segundo valor: ')

// consnole.log(5 * 1)
// consnole.log(5 * 2)
// consnole.log(5 * 3)
// consnole.log(5 * 4)
// consnole.log(5 * 5)
// consnole.log(5 * 6)
// consnole.log(5 * 7)
// consnole.log(5 * 8)
// consnole.log(5 * 9)
// consnole.log(5 * 10)


//<variável>; <condição>; <incremento>

// let counter = 0
// let multiplier = 7

// for(counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }



// let counter = 0
// let multiplier = Number(prompt('Digite o número que você queira saber a tabuada: '))

// for(counter = 0; counter <= 10; counter++){
//     console.log(`${multiplier} * ${counter} =`, multiplier * counter)
// }


//Imprimir os valores pares entre 1 e 20
//for(let i = 0; i <= 20; i += 2){
// console.log(i)
//}

//EXERCICIO 1: CALCULAR A SOMA DE 1 ATÉ 100

// let sum = 0
// let multiplier = 0

// for(counter = 0; counter <= 100; counter++){
//     console.log(`${multiplier} + ${counter}=`, multiplier + counter)
// }

// for(let j = 1; j <= 100; j++){
//     sum += j
// }

// console.log(sum)



//EXERCÍCIO 2: IMPRIMAM OS VALORES DE 1 ATÉ 10 DE ORDEM DECRESCENTE

// for(let i = 10; i >= 1; i--){
//     console.log(i)
// }


//EXERCÍCIO 3:CALCULAR A SOMA DOS NÚMEROS DE 1 A 100

// let i = 0
// let counter = 0

// while(i <= 100){
//     counter += i
//     i++
// }
// console.log(counter)

//EXERCÍCIO 4:A MÉDIA ARITMÉTICA DESSES NÚMEROS

// let num1 = Number(prompt('Insira o primeiro número: '))
// let counter = 0
// let sum = 0

// while(num1 !== 0){
//     sum += num1
//     counter++
//     num1 = Number(prompt('Digite outro número: '))
// }
// console.log('A média aritmética é: ', sum/counter)


//EXERCÍCIO 5:ESCREVA UM ALGORÍTMO PARA IMPRIMIR OS 50 PRIMEIROS NÚMEROS PRIMOS MAIOR QUE 100
//OBS:NÚMERO PRIMO É DIVISÍVEL POR 1 E ELE MESMO


// let count = 0
// let num = 101
// do{
//     let primo = 0

//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//             primo++;
//         }
//     }
//    if(primo === 2){
//    console.log(num)
//    count++
//    }

//     num++
// }while(count < 50)



//EXERCÍCIO 6: SOLICITAR NÚMEROS AO USUÁRIO ATÉ QUE ELE ISIRA UM VALOR NEGAIVO

// let num = 0

// do{
//     num = Number(prompt('Digite um número: '))
// } while(num >= 0)





// let carros = Array()

// carros[0] = 'Civic'
// carros[1] = 10
// carros[2] = true
// carros['Hyago'] = '10'

// let motos = Array('CBR', 'Ninja', 10)
// let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

// livros.push('Sherlock Holmes')
// livros.unshift('1984')
// livros.pop()
// livros.shift()
// livros.splice(2, 1, 'Alala')
// console.log(livros)





//EXERCÍCIO 1 - SOMA DOS ELEMENTOS DE UM ARRAY

// let sum = 0
// let arr = [10, 20, 30, 40]

// console.log(arr.length)

// for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
// }
//     console.log(sum)

//EXERCÍCIO 2 - ENCONTRE O MAIOR NÚMERO DE UM ARRAY

// let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//      if(arr[j] > max){
//          max = arr[j]
//      }
// }
// console.log(max)

//EXERCÍCIO 3 - REVERTER UM ARRAY

// let reversed = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }
// console.log(reversed)


//EXERCÍCIO 4 - CRIEM UM NOVO ARRAY CONTENDO APENAS OS NÚMEROS PARES

// let pares = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         pares.push(arr[m])
//     }
// }

// console.log(pares)


//EXERCÍCIO 5 - CONTAR OCORRÊNCIAS DE UM VALOR

// let vet = [10, 10, 7, 5, 10]
// let value = 10
// let count = 0

// for(let l = 0; l < vet.length; l++){
//     if(vet[l] === value){
//         count++
//     }
// }
// console.log(`O valor ${value} ocorre ${count} vezes no vetor`)



//arrays/vetores multidimensionais

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// console.table(matriz)

// console.log(matriz[1][1])  //linha/coluna

// for(let i = 0; i < matriz.length; i++){
//     for(let j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }


// let arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let arr2 = [
//     [9, 8, 7],
//     [6, 5, 4],
//     [3, 2, 1]
// ]

// let resultado = []

// if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
//     throw new Error("Os arrays devem ter o mesmo tamanho.")
// }

// for(let i = 0; i < arr1.length; i++){
//     let somaLinha = []
//     for(let j = 0; j < arr1[i].length; j++){
//         somaLinha.push(arr1[i][j] + arr2[i][j])
//     }
//     resultado.push(somaLinha)
// }
// console.table(resultado)


//EXERCÍCIO SOMAR A DIAGONAL PRINCIPAL DE UMA MATRIZ

// let matriz = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// let soma = 0

// for(let i = 0; i < matriz.length; i++){
//     soma += matriz[i][i]
// }
// console.log(soma)


// let thingsList = Array()

// thingsList['hardware'] = Array()
// thingsList['fruits'] = Array()
// thingsList['People'] = Array('Aristóteles', 'Tolkien')

// thingsList['hardware'][0] = 'Notebook'
// thingsList['hardware'][1] = 'mouse'
// thingsList['hardware'][2] = 'teclado'
// thingsList['fruits'][0] = 'Laranja'
// thingsList['fruits'][1] = 'maça'

// console.table(thingsList)



// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melância'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// console.log(fruitsList.indexOf('Morango'))
// let index = (fruitsList.indexOf('Morango'))

// if(index === -1){
//     console.log('Elemento não existe')
// }else{
//     console.log(`O elemento existe e está na posição: ${index}`)
// }

// let numberList = []

// numberList[0] = 10
// numberList[1] = 12
// numberList[2] = 0
// numberList[3] = 16
// numberList[4] = 7
// numberList[5] = 9

// console.log(numberList.sort((a, b) => a - b))



// function calculateLandArea(width, height){
//     let area = width * height
//     return area
// }

// let width = 10
// let height = 200

// let area = calculateLandArea(width, height)

// console.log(`A área possui ${area} metros quadrados`)

//EXERCÍCIO: ORDENE UM ARRAY

// let alfabeto = ['A', 'C', 'D', 'B']

// function ordena(arrayASerOrdenado){
//     return arrayASerOrdenado.sort() 
// }
//     console.log(ordena(alfabeto))


// let fruitsList = []

// fruitsList[0] = 'Maça'
// fruitsList[1] = 'Banana'
// fruitsList[2] = 'Melância'
// fruitsList[3] = 'Uva'
// fruitsList[4] = 'Morango'

// function ordenarArray(fruitsList){
//     return fruitsList.sort()
// }
// console.log(ordenarArray(fruitsList))


// let teste = function(){
//     console.log("Olá Mundo!")
// }
// teste()

// function showFunction(successCallback, errorCallback){
//     if(true){
//         successCallback("Requisição bem sucedida")
//     }else{
//         errorCallback("Erro na Requisição")
//     }
// }

// let successCallback = function(message){
//     console.log(message)
// }

// let errorCallback = function(message){
//     console.error(message)
// }

// showFunction(successCallback, errorCallback)


// 1. Soma dos Elementos de um Array

// let arr = [10, 20, 30, 40]

// function somaDosElementos(arr) {
//     let sum = 0

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum

// }
// console.log(somaDosElementos(arr))


//2. Encontre o Maior Número em um Array

// arr = [10, 70, 30, 40]

// function maiorNumero(arr){

//     let max = arr[0]

// for(let j = 0; j < arr.length; j++){
//      if(arr[j] > max){
//          max = arr[j]
//      }
// }
// return max
// }

//     console.log(maiorNumero(arr))

//3. Reverter um Array

// arr = [10, 20, 30, 40]


// function reverso(arr){

//     let reversed = []

// for(let k = arr.length - 1; k >= 0; k--){
//     reversed.push(arr[k])
// }
// return reversed
// }
// console.log(reverso(arr))

//4. Criem um novo array contendo apenas os números pares

// arr = [1, 2, 3, 4, 5]


// function pares(arr){

//     let pares = []

//     for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         pares.push(arr[m])
//     }
// }
// return pares
// }
// console.log(pares(arr))

//5. Contar Ocorrências de um Valor

// let arr = [10, 10, 7, 5, 10]

// function ocorrencias(arr){

//     let value = 10
//     let count = 0

// for(let l = 0; l < arr.length; l++){
//     if(arr[l] === value){
//         count++
//     }
// }return(`O número ${value} aparece ${count} vezes.`)
// }
// console.log(ocorrencias(arr))



// let nome = "Equipe Olímpica"

// console.log("Jaques".length)
// console.log("Jaques".charAt(0))
// console.log(nome.indexOf('q'))

// // console.log(nome.replace('Jaques', 'Hyago'))

// console.log(nome.substr(7, 8))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim() + '-')

//Matemáticos

// console.log(Math.ceil(100.73)) // arredonda pra cima
// console.log(Math.floor(100.73)) //arredonda pra baixo
// console.log(Math.round(100.73)) //arredonda de forma inteligente
// console.log(Math.sqrt(100)) //raiz quadrada
// console.log(Math.pow(100, 2)) //exponenciação
// console.log(Math.cbrt(100))        //raiz cúbica
// console.log(Math.abs(100.20))      //valor absoluto
// console.log(Math.random() * 100)   //número aleatório entre 0 e 1

//datas

// let date = new Date()

// console.log(date.getDate())

// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())

// console.log(date.toString())
// date.setDate(date.getDate() + 720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())


// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milisecondes_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(milisecondes_between_dates)

// let milisecondes_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia tem ${milisecondes_per_day} milisegundos`)

// console.log(`A diferença entre as datas é de ${Math.ceil(milisecondes_between_dates/milisecondes_per_day)} dias`)


//Inverter uma string

// let string = "João"

// function reversed(string) {
//     let restring = " "
//     for (let i = string.length - 1; i >= 0; i--) {
//         restring += string[i]
//     } return restring

// }
//     console.log(reversed(string))


//Contar vogais

// let palavraDesejada = "João"

// function descobrirVogais(palavra){
    
//     let count = 0
//     let vogal = "aeiouAEIOUã"

//     for(let i = 0; i < palavra.length; i++){
       
//         let caractere = palavra[i]

//         for(let j = 0; j < vogal.length; j++)
//         if(caractere === vogal[j]){
//         count++
//         break
//         }
//     }
//     return count
// }
//     console.log(descobrirVogais(palavraDesejada))


//Gerar número aleatório

// let num1 = Number(prompt("Digite o início: "))
// let num2 = Number(prompt("Digite o fim: "))

// function numeroAleatorio(inicio, Fim){
//     return Math.floor(Math.random() * (Fim - inicio + 1) + inicio)
// }
// console.log(numeroAleatorio(num1, num2))


//Dias entre duas datas

// let date1 = new Date(2024, 7, 6)
// let date2 = new Date(2024, 7, 7)

// let milisecondes_between_dates = Math.abs(date1.getTime() - date2.getTime())

// let milisecondes_per_day = (1 * 24 * 60 * 60 * 1000)

// console.log(`A diferença entre as datas é de ${Math.ceil(milisecondes_between_dates/milisecondes_per_day)} dias`)

//Formatar data

// let dataDesejada = "2024-08-07"

// function dataBrasileira(date){
//     let dataFormtada = new Date(date)
//     let dia = dataFormtada.getDate()
//     if(dia < 10){
//         dia = "0" + dia
//     }
//     let mes = dataFormtada.getMonth() + 1
//     if(mes < 10){
//         mes = "0" + mes
//     }
//     let ano = dataFormtada.getFullYear()
//     return dia + "/" + mes + "/" + ano
// }
//     console.log(dataBrasileira(dataDesejada))







//chave: valor
// let serie = {
//     nome: "The Boys",
//     genero: ["Ação, parodia, heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },
    
//     mostrarCaracterísticas: function(){
//         return `O nome da série é: ${this.nome} e sua classificação é + ${this.classificacao}`
//     }
    
// }
// console.log(serie.mostrarCaracterísticas())



// let livro = {
//     nome: "Diário de um banana",
//     genero: "Comedia",
//     estadodeleitura: "Ainda não concluído",
//     classificacao: "Livre",
//     nrLivros: "18+"
// }
// console.log(livro)


// let carro = {
//     nome: "C3",
//     tipo: "semiSUV",
//     estado: "parado",
//     cor: "cinza",
//     mostrarCaracterísticas: function(){
//         return `O ${this.nome} é um carro ${this.tipo}, e ele agora está ${this.estado}, e sua cor é ${this.cor}`
//     }
// }
// console.log(carro.mostrarCaracterísticas())


let motor = "1000"
let nome = "btw s1000rr"
let tipo = "esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor,
}

// console.log(moto)

let atleta = {
    nome:"Rayssa Leal",
    esporte: "Skate street",
    idade: 16
}

atleta.nacionalidade = "Brasil"
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}
                        //function ()
atleta.celebrarVitoria = () => {return"Ganhei!"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissiona: "Batman"
}

let obj2 = obj1

obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

function computador(processador, gpu, ram, armazaenamento){
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazaenamento = armazaenamento

    this.ligar = function(){
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function(){
        return `
        processador: ${this.processador}
         gpu: ${this.gpu}
         ram: ${ram}
         armazenamento: ${armazaenamento}`
    }
}

let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())

function jogos(titulo, genero, anoLancamento, empresa, jogar){
    return{
        titulo,
        genero,
        anoLancamento,
        empresa,
        jogar
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => {return 'Jogando'})

// console.log(jogo1.jogar())

for(let key in jogo1){
    // console.log(`${key}: ${jogo1[key]}`)
}

const jogadores = [['Pelé', 'Romário'], 'CR7', 'Messi']

for(let jogador of jogadores){
    // console.log(jogador)
}

const NOME = "Silva"

for(let char of NOME){
    // console.log(char)
}

for(let jogo of Object.keys(jogo1)){
    // console.log(jogo1[jogo])
}



let carro = {
        nome: "C3",
        tipo: "semiSUV",
        estado: "parado",
        cor: "cinza",
}

for(let key in carro){
    // console.log(`${key}: ${carro[key]}`)
}

for(let key of Object.keys(carro)){
    // console.log(carro[key])
}


    let livro = {
    nome: "Diário de um banana",
    genero: "Comedia",
    estadodeleitura: "Ainda não concluído",
    classificacao: "Livre",
    nrLivros: "18+"
}

for(let key in livro){
    // console.log(`${key}: ${livro[key]}`)
}

for(let key of Object.keys(livro)){
    // console.log(livro[key])
}





















/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média 
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/


const professor = {
    name: "Tony Stark",
    subject: "Physics",
    grades: {
        student1: 10.0,
        student2: 6.0,
        student3: 8.0
    }
}

let sumGrades = 0
let numberOfStudents = 0



for(let student in professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}

let average = sumGrades / numberOfStudents

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6 
//     ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média`
// )



/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const library = [
//     {title: "O Hobbit", author: "J. R. R. Tolkien", year: 1925},
//     {title: "Harry Potter: Prisioneiro de Azkaban", author: "J. K. Rolling", year: 1999},
//     {title: "Nárnia", author: "C. S. Lewis", year: 2010}
// ]

// for(let book of library){
//     if(book.year < 2000){
//         console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}.`)
//     }
// }




/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/


const movies = [
    { title: "Tropa de Elite", genre: "Ação"},
    { title: "Top Gun", genre: "Ação"},
    { title: "Interestelar", genre: "Sci-Fi"},
    { title: "Senhor dos Anéis", genre: "Aventura"},
    { title: "Poderoso Chefão", genre: "Máfia"},
    { title: "Vingadores: Ultimato", genre: "Heróis"},
    { title: "DeadPool & Wolverine", genre: "Heróis"},
]

    let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    }else{
        genreCount[movie.genre] = 1
    }
})

// for(let genre in genreCount){
//     console.log(`Existem ${genreCount[genre]} filmes do gênero ${genre}`)
// }















// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//     this.head = null
//     this.size = 0
// }

//     add(data) {
//         let newNode = new Node(data)

//         if(this.head === null){
//             this.head = newNode
//         }else{
//             let current = this.head
//             while(current.next !== null){
//                 current = current.next
//             }

//             current.next = newNode
//         }

//         this.size++
//     }

//     insertAt(data, index){
//         if(index < 0 || index > this.size){
//             return console.log('Index fora dos limites!')
//         }

//         let newNode = new Node(data)
//         let current = this.head
//         let previous

//         if(index === 0){
//             newNode.next = this.head
//             this.head = newNode
//         }else{
//             for(let i = 0; i < index; i++){
//                 previous = current
//                 current = current.next
//             }

//             newNode.next = current
//             previous.next = newNode
//         }

//         this.size++
//     }

//     removeFrom(index){
//         if(index < 0 || index > this.size){
//             return console.log('Index fora dos limites')
//         }

//         let current = this.head
//         let previous

//         if(index === 0){
//             this.head = current.next
//         }else{
//             for(let i = 0; i < index; i++){
//                 previous = current
//                 current = current.next
//             }

//             previous.next = current.next
//         }

//         this.size--
//         return current.data
//     }

//     indexOf(data){
//         let current = this.head
//         let index = 0

//         while(current !== null){
//             if(current.data === data){
//                 return index
//             }
//             index++
//             current = current.next
//         }

//             return -1
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     sizeOfList() {
//         return this.size
//     }

//     printList() {
//         let current = this.head
//         while(current !== null){
//             console.log(current.data)
//             current = current.next
//         }
//     }

// }

// let list = new LinkedList()

// list.add("Elemento 0")
// list.add("Elemento 1")
// list.add("Elemento 2")
// list.add("Elemento 3")

// console.log(list.indexOf("Elemento 3"))
// list.removeFrom(1)
// list.printList()

// console.log(list.sizeOfList())














class Node{
    constructor(data){
        this.data = data 
        this.next = null           //caixinha
        this.previous = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }

        this.size++
    }

    insertAt(data, index){
      if(index < 0 || index > this.size){
        return console.log('Index fora dos limites!')
      }

      let newNode = new Node(data)
      let current = this.head

      if(index === 0){
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
        }
      } else if(index === this.size){
        this.tail.next = newNode
        newNode.previous = this.tail
        this.tail = newNode
      } else {
        for(let i = 0; i < index; i++){
            current = current.next
        }

        newNode.next = current
        newNode.previous = current.previous

        current.previous.next = newNode
        current.previous = newNode
      }

      this.size++
    }

    removeAt(index) {
        if(index < 0 || index >= this.size){
            return console.log("Index fora dos limites!")
        }

        let current = this.head

        if(index === 0){
            this.head = this.head.next

            if(this.head !== null){
                this.head.previous = null
            } else {
                this.call = null
            }
        } else if(index === this.size - 1){
            this.tail = this.tail.previous
            this.tail.next = null
        } else {
            for(let i = 0; i < index; i++){
                current = current.next
            }

            current.previous.next = current.next
            current.next.previous = current.previous
        }

        this.size--
    }

    getData(index){
      if(index < 0 || index >= index.size){
        return console.log("Index fora dos limites!")
      }

      let current = this.head

      for(let i = 0; i < index; i++){
        current = current.next
      }

      return current.data
    }

    print(){
        let current = this.head
        let result = []

        while(current !== null){
            result.push(current.data)
            current = current.next
        }

        console.log(result.join(' <=> '))
    }

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }

    clear() {
        this.head = null
        this.tail = null
        this.size = 0

        consonle.log("Lista Limpa!")
      }

      resversedList(){
        let current = this.head;
        let prev = null;
        let next;
        while(current !== null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
}

let lista = new DoublyLinkedList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)

lista.print()

lista.insertAt(5, 0)
lista.insertAt(15, 3)
lista.insertAt(55, lista.getSize())
lista.print()

lista.removeAt(0)
lista.removeAt(3)
lista.removeAt(lista.getSize() - 1)
lista.resversedList()
lista.print()

console.log("Elemento na posição 2:", lista.getData(2))
console.log("A lista está vazia?", lista.isEmpty())
console.log("Tamanho da lista?", lista.getSize())

//implementem um método para limpar toda a lista, remover todos os nós.
//inverter a ordem dos elementos em uma lista.

//FINAL DO MÓDULO 1