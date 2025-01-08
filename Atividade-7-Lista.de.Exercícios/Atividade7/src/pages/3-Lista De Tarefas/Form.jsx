import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Form() {

    const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

    const [tarefas, setTarefas] = useState([])
    const [novaTarefa, setNovaTarefa] = useState('')
    const [editIndex, setEditIndex] = useState(null)

    const handleInputChange = (event) => {
        setNovaTarefa(event.target.value)
    }

    const handleAddTask = () => {
        if (novaTarefa.trim() === '') {
            return
        }

        if (editIndex !== null) {
            const updatedTasks = tarefas.map((tarefa, index) =>
                index === editIndex ? novaTarefa : tarefa
            )
            setTarefas(updatedTasks)
            setEditIndex(null)
        } else {
            setTarefas([...tarefas, novaTarefa])
        }

        setNovaTarefa('')
    }

    const handleRemoveTask = (index) => {
        const updatedTasks = tarefas.filter((_, i) => i !== index)
        setTarefas(updatedTasks)
    }

    const handleCompleteTask = (index) => {
        const updatedTasks = tarefas.map((tarefa, i) =>
            i === index ? { text: tarefa, completed: !tarefa.completed} : tarefa
        )
        setTarefas(updatedTasks)
    }

    const handleClearCompleted = () => {
        const updatedTasks = tarefas.filter(tarefa => !tarefa.completed)
        setTarefas(updatedTasks)
    }

    const handleEditTask = (index) => {
        setNovaTarefa(tarefas[index])
        setEditIndex(index)
    }

    return (
        <>
            <div className="container">
                <h1>Lista de Tarefas</h1>
                <input
                type="text"
                value={novaTarefa}
                onChange={handleInputChange}
                placeholder='Digite uma nova tarefa'
                />
                <button onClick={handleAddTask}>{editIndex !== null ? 'Salvar Tarefa' : 'Adicionar Tarefa'}</button>
                <button onClick={handleClearCompleted}>Limpar Tarefas Concluídas</button>

            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index} style={{ textDecoration: tarefa.completed ? 'line-through' : 'none' }}>
                            {tarefa.text || tarefa} {/*Se tiver a propriedade text, exibe ela */}
                        <button className="BotãoConcluído" onClick={() => handleCompleteTask(index)}>Concluído</button>
                        <button onClick={() => handleEditTask(index)}>Editar</button>
                        <button onClick={() => handleRemoveTask(index)}>Remover</button>
                    </li>
            ))}
            </ul>
        </div>

        <div>
            <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
        </div>
    </>
    )
}

export default Form