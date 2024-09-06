//1. ACESSANDO PROPRIEDADES DE OBJETOS

// let carro = {
//     marca: "Ford",
//     modelo: "Ka",
//     ano: "2020",
//     cor: "Branco",
// }

// for(let i in carro){
//     console.log(carro[i])
//     i++
// }


//2. VERIFICANDO PROPRIEDADES

// let livro = {
//     titulo: "As Crônicas de Nárnia",
//     autor: "C. S. Lewis",
//     anoPublicacao: 2002,
//     genero: "Fantasia"
// }

//     for(let propriedade in livro){
//         if(propriedade === "editora"){
//             console.log("Existe editora")
//             break
//         }
//     }

//     if(!livro.editora){
//         livro.editora = "WMF Martins Fontes"
//     }

//     console.log(livro)


//3.FILTRANDO PROPRIEDADES DE OBJETOS

// let produto = {
//     propriedade1: 1,
//     propriedade2: 2,
//     propriedade3: 3,
//     propriedade4: 4,
//     propriedade5: 5,
// }

// function filtrar(objeto){
//     let novoObjeto = {}
//     for(let chave in objeto)
//         if(objeto[chave] >= 3){
//             novoObjeto[chave] = objeto[chave]
//         }
//         console.log(novoObjeto)
// }
// filtrar(produto)


//4. ITERANADO SOBRE ARRAYS DE OBJETOS

// let pessoas = [
//     João = {
//         nome: "João",
//         idade: 17,
//         cidade: "Cachoeirinha",
//     },

//     Paula = {
//         nome: "Paula",
//         idade: 42,
//         cidade: "Gravataí"
//     },
// ]
// for(let chave of pessoas){
//     console.log(chave)
// }


//5. CALCULANDO VALORES EM ARRAYS DE OBJETOS

// let alunos = [
//     {
//         nome: "João",
//         nota1: 5,
//         nota2: 7,
//     },
//     {
//         nome: "Paula",
//         nota1: 6,
//         nota2: 8,
//     }
// ]
// for(let chave of alunos){
//     media = (chave.nota1 + chave.nota2) / 2
//     console.log(chave)
//         console.log(`A média de ${chave.nome} é de ${media}`)
// }


//6. FILTRANDO ARRAYS DE OBJETOS

// let funcionarios = [
//     {
//         nome: "João",
//         cargo: "Estágiário",
//         salario: 700,
//     },
//     {
//         nome: "Pedro",
//         cargo: "Chefe",
//         salario: 1400,
//     }
// ]
// for(let chave of funcionarios){
//     if(chave.salario >= 500){
//         console.log(chave)
//     }
// }


//7. MODIFICANDO OBJETOS EM UM ARRAY

// let produtos = [
//     {
//         nome: "Nescau",
//         preço: 10,
//         desconto: 0.10,
//     },
//     {
//         nome: "Cereal",
//         preço: 15,
//         desconto: 0.10,
//     }
// ]
// produtos.forEach(novoPreço => {
//     novoPreço.preço = novoPreço.preço - (novoPreço.preço * novoPreço.desconto)
//     console.log(novoPreço)
// })


//8. CRIANDO NOVOS ARRAYS A PARTIR DE OBJETOS

// let filmes = [
//     {
//        titulo: "Gente Grande",
//         diretor: "Dennis Dugan",
//         anoLancamento: 2010,
//     },
//     {
//        titulo: "4 Vidas De Um Cachorro",
//         diretor: "Lasse Hallström",
//         anoLancamento: 2017,
//     }
// ]
// let SomenteTitulo = []
// filmes.forEach(filme => {
//     SomenteTitulo.titulo = filme.titulo
//     console.log(SomenteTitulo)
// })


//9. CONTABILIZANDO ELEMENTOS COM UMA CONDIÇÃO

// let clientes = [
//     {
//         nome: "João",
//         idade: 17,
//         cidade: "Cachoeirinha",
//     },
//     {
//         nome: "Paula",
//         idade: 42,
//         cidade: "Gravataí"
//     },
//     {
//         nome: "Roberto",
//         idade: 46,
//         cidade: "Canoas",
//     }
// ]

// let count = 0
// clientes.forEach(age => {
//     if(age.idade > 30){
//         count++
        
//     }
// }
// )
// console.log(`Existem ${count} clientes.`)

//10. CRIANDO RELATÓRIOS COM OBJETOS E ARAYS

// let vendas = [
//     {
//         produto: "Maçã",
//         quantidade: 10,
//         valor: 15,
//     },
//     {
//         produto: "Pão",
//         quantidade: 3,
//         valor: 5,
//     },
//     {
//         produto: "Sabão",
//         quantidade: 5,
//         valor: 12,
//     }
// ]
// let valorTotal = 0
// vendas.forEach(venda => {
//   valorTotal += venda.quantidade * venda.valor
// })
// console.log(`Valor total: R$${valorTotal.toFixed(2)}`)


//11. AGRUPANDO ELEMENTOS COM FOREACH

// let pedidos = [
//     {
//         cliente: "João",
//         produto: "Maçã",
//         quantidade: 10,
        
//     },
//     {
//         cliente: "João",
//         produto: "Massa",
//         quantidade: 10,
        
//     },
//     {
//         cliente: "Paula",
//         produto: "Pão",
//         quantidade: 3,
        
//     },
//     {
//         cliente: "Roberto",
//         produto: "Sabão",
//         quantidade: 5,
       
//     }
// ]
// let pedidosTotais = {}
// pedidos.forEach(pedido => {
//     if(pedidosTotais[pedido.cliente]){
//         pedidosTotais[pedido.cliente] += pedido.quantidade
//     }else{
//         pedidosTotais[pedido.cliente] = pedido.quantidade
//     }
// })
// console.log(pedidosTotais)


//12. ATUALIZANDO UM ARRAY DE OBJETOS

// let estoque = [
//     {
//         produto: "Maçã",
//         quantidade: 10,
//         minimo: 1,
//     },
//     {
//         produto: "Pão",
//         quantidade: 35,
//         minimo: 50,
//     },
//     {
//         produto: "Calabresa",
//         quantidade: 4,
//         minimo: 5,
//     }
// ]
// estoque.forEach(produto => {
//     if(produto.quantidade < produto.minimo){
//         produto.quantidade *= 2
//     }
// })
// console.log(estoque)


//13. IMPLEMENTANDO UM CARRINHO DE COMPRAS

// let carrinho = {
//     itens: [
//         {nome: "Maçã", quantidade: 5, precoUnitario: 2},
//         {nome: "Pão", quantidade: 7, precoUnitario: 1.5},
//         {nome: "Caderno", quantidade: 10, precoUnitario: 13},
// ]
// }
// let precoTotal = 0
// carrinho.itens.forEach(item => {
//     precoTotal += item.quantidade * item.precoUnitario
// })
// console.log(precoTotal)


//14. MANIPULANDO OBJETOS COMPLEXOS

// let empresa = {
//     departamentos: [
//         {nome: "Administrativo", funcionarios: [
//             {nome: "João", cargo: "Estagiário"},
//             {nome: "Roberto", cargo: "Gerente"},
//         ]},
//         {nome: "Financeiro", funcionarios: [
//             {nome: "Maria", cargo: "Estagiária"},
//             {nome: "Fernando", cargo: "Motorista"},
//         ]},
//         {nome: "Hospitalar", funcionarios: [
//             {nome: "Paula", cargo: "Gerente"},
//             {nome: "Joaquina", cargo: "Estagiária"},
//         ]},
//     ]
// }
// for(const key in empresa.departamentos){
//     const departamento = empresa.departamentos[key]
//     console.log(`Departamento: ${departamento.nome}`)
//     for(const chave of departamento.funcionarios){
//         console.log(`Funcionário: ${chave.nome}, Cargo: ${chave.cargo}`)
//     }
// }


//15. FILTRANDO E SOMANDO VALORES

// let transacoes = [
//     {tipo: "entrada", valor: 10},
//     {tipo: "saída", valor: 5},
//     {tipo: "entrada", valor: 20},
//     {tipo: "saída", valor: 30},
//     {tipo: "entrada", valor: 55},
//     {tipo: "saída", valor: 10},
// ]
// let saldoFinal = 0
// transacoes.forEach(transacao => {
//     if(transacao.tipo === "entrada"){
//         saldoFinal += transacao.valor
//     }else if(transacao.tipo === "saída"){
//         saldoFinal -= transacao.valor
//     }
// })
// console.log(`Saldo: ${saldoFinal}`)