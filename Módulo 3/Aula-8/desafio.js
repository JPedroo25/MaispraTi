let Task = document.getElementById('Task')

function createTaskElement(text) {
    let li = document.createElement('li')

    li.textContent = text

    let removeBtn = document.createElement('span')
    removeBtn.textContent = 'Remover'
    removeBtn.classList.add('remove-btn')

    removeBtn.addEventListener('click', () => li.remove())

    li.appendChild(removeBtn)
}