const depoimento = document.querySelectorAll('.hidden')

const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

depoimento.forEach((element) => myObserver.observe(element))