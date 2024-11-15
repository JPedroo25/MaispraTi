const openModalButton = document.querySelector("#login")
const closeModalButton = document.querySelector("#fechar")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade")


const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
}

[openModalButton].forEach((el) =>{
    el.addEventListener("click", () => toggleModal())
})

const form = document.getElementById('form')
const campos = document.querySelectorAll('.inputs-required')
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

form.addEventListener('submit', () => {
    nameValidate()
    emailValidate()
    duvidaValidate()
})


function setError(index){
    campos[index].style.border = '0.5vh solid #ff0000'
    spans[index].style.display = 'block'
}

function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0)
    } else {
        removeError(0)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1)
    } else {
        removeError(1)
    }
}

function senhaValidate(){
    if(campos[2].value.length === 0){
        setError(2)
    } else {
        removeError(2)
    }
}