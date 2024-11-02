document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    
    li.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit" onclick="editTask(this)">Editar</button>
            <button class="delete" onclick="deleteTask(this)">Excluir</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskText = li.querySelector('span');
    const newTaskText = prompt('Editar tarefa:', taskText.innerText);
    
    if (newTaskText) {
        taskText.innerText = newTaskText;
    }
}
