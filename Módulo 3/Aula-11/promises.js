const prompt = require('prompt-sync')()

const pedidoPizza = new Promise((resolve, reject) => {
    let pizzaPronta = true

    if(pizzaPronta) {
        resolve("Pizza foi entregue!")
    } else {
        reject("O pedido da pizza falhou")
    }
})







function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dados = {nome: 'João', idade: 50}
            resolve(dados)
        }, 2000)
    })
}

buscarDados().then((dados) => {
    console.log("Dados recebidos: ", dados)
}).catch((erro) => {
    console.log("Erro ao buscar dados: ", erro)
})



function login(usuario){
    return new Promise((resolve, reject) => {
        if(usuario === 'Emerson'){
            resolve("login bem-sucedido")
        } else {
            reject("Falha na autenticação.")
        }
    })
}

function buscarPerfil(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({nome: "Emerson", profissão: "Desenvolvedor"})
        }, 2000)
    })
}



let cafeRequisitado = prompt('Digite seu café: ')
function fazerPedido(cafe){
    return new Promise((resolve, reject) => {
        if(cafe === resolve){
            if(cafeRequisitado === 'expresso'){
            setTimeout(() => {
            expresso('Seu café expresso está pronto!')
        }, 2000)}} else if(cafeRequisitado === 'latte'){
        setTimeout(() => {
            latte('Seu café Latte está pronto!')
        }, 3000)
        } else {
            reject('Café inválido')
        }
    })
}

fazerPedido().then((cafe) => {
    console.log(cafe)
}).catch((erro) => {
        console.log(erro)
})