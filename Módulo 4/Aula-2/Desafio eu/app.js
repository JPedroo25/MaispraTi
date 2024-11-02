let aba1 = document.querySelector('.why-react')
let aba2 = document.querySelector('.core-features')
let aba3 = document.querySelector('.related-resources')


function tradePannel1(){
        aba1.style.display = 'flex'

        aba2.style.display = 'none'

        aba3.style.display = 'none'
}

function tradePannel2(){
        aba1.style.display = 'none'

        aba2.style.display = 'flex'

        aba3.style.display = 'none'

}

function tradePannel3(){
        aba1.style.display = 'none'

        aba2.style.display = 'none'

        aba3.style.display = 'flex'
}