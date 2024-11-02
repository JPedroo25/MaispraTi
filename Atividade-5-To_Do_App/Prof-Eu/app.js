class Task {
    constructor(description) {
        this.description = description;
    }

    // Método para validar se todos os campos da tarefa foram preenchidos corretamente
    validateData() {
        for (let key in this) {
            if (this[key] === undefined || this[key] === "") {
                console.error(`The field ${key} is required.`);
                return false; // Retorna falso se algum campo estiver vazio ou indefinido
            }
        }
        return true; // Retorna verdadeiro se todos os campos forem válidos
    }
}

class Database {
    constructor() {
        this.initDatabase();
    }

    // Inicializa o banco de dados no localStorage
    initDatabase() {
        const id = localStorage.getItem('id');
        if (id === null) {
            localStorage.setItem('id', '0'); // Inicializa o id no localStorage
        }
    }

    // Carrega todas as tarefas armazenadas no localStorage
    loadTasks() {
        const tasks = [];
        const id = localStorage.getItem('id');

        for (let i = 1; i <= id; i++) {
            try {
                const task = JSON.parse(localStorage.getItem(i));
                if (task !== null) {
                    task.id = i; // Adiciona o ID à tarefa para referência
                    tasks.push(task);
                }
            } catch (e) {
                console.error(`Error loading task with id ${i}:`, e);
            }
        }
        return tasks; // Retorna um array com todas as tarefas
    }

    // Cria uma nova tarefa no banco de dados
    createTask(task) {
        const id = this.getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem('id', id.toString());
    }

    // Remove uma tarefa do banco de dados
    removeTask(id) {
        localStorage.removeItem(id);
    }

    // Filtra tarefas com base em critérios fornecidos
    searchTasks(searchTask) {
        const tasks = this.loadTasks();

        return tasks.filter(task => {
            return
                (searchTask.type ? tasktask.description === searchTask.description : true);
        });
    }

    // Obtém o próximo ID de tarefa disponível
    getNextId() {
        const currentId = localStorage.getItem('id');
        return parseInt(currentId) + 1;
    }
}

const database = new Database();

// Função para registrar uma nova tarefa
function registerTask() {
    const description = document.getElementById('description').value;

    const task = new Task(description);

    if (task.validateData()) {
        database.createTask(task);
        alert('Task registered successfully!');
        resetForm(); // Limpa o formulário após o registro
    } else {
        alert('Please fill in all fields.');
    }
}

// Função para limpar o formulário após o registro
function resetForm() {
    document.getElementById('description').value = '';
}

// Função para carregar tarefas na lista de tarefas
function loadTasks(tasks = database.loadTasks()) {
    const listTasks = document.getElementById('listTasks');
    listTasks.innerHTML = ''; // Limpa a lista existente

    tasks.forEach((t) => {
        const row = listTasks.insertRow();

        // Converte o tipo de tarefa de número para texto
        row.insertCell(1).innerHTML = getTaskTypeName(t.type);
        row.insertCell(2).innerHTML = t.description;

        // Cria e adiciona o botão de deletar
        const btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.id = t.id;
        btn.innerHTML = 'Delete';
        btn.onclick = () => {
            if (confirm('Are you sure you want to delete this task?')) {
                database.removeTask(t.id);
                loadTasks(); // Atualiza a lista de tarefas
            }
        };

        row.insertCell(3).append(btn);
    });
}

// Função para buscar tarefas com base nos critérios do formulário
function searchTasks() {
    const description = document.getElementById('description').value;

    const task = new Task(description);
    const tasks = database.searchTasks(task);

    loadTasks(tasks); // Carrega as tarefas filtradas
}

// Carrega as tarefas ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    if (document.body.contains(document.getElementById('listTasks'))) {
        loadTasks();
    }
});