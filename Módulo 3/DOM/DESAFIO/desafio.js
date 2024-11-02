let titulo = document.getElementById('titulo')
let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')
let lista = document.getElementById('lista')

function adicionarItem(){
   let novoItem = document.createElement('li')
    
   novoItem.innerHTML = `Item ${lista.children.length}`
    
   lista.appendChild(novoItem)

    titulo.innerHTML = "Novo item adicionado!"
    titulo.style.color = 'Green'
}

function removerItem(){
    if(lista.children.length > 0){
        lista.removeChild(lista.lastElementChild)

        titulo.innerHTML = "Item removido!"
        titulo.style.color = "red";
    } else {
        titulo.innerHTML = "Não há mais itens para remover!"
        titulo.style.color = "gray"
    }
}

botao1.addEventListener('click', adicionarItem)
botao2.addEventListener('click', removerItem)