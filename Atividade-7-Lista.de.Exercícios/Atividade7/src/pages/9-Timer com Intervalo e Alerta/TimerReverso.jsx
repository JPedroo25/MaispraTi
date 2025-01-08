import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'

function Timer() {

  const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

  // Estado para armazenar o tempo inicial (segundos definidos pelo usuário)
  const [seconds, setSeconds] = useState(0) 
  const [remainingTime, setRemainingTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [inputTime, setInputTime] = useState('')

  // Função para iniciar a contagem regressiva
  const startTimer = () => {
    if (seconds > 0) {
      setRemainingTime(seconds) // Definir o tempo restante com o valor inicial de segundos
      setIsRunning(true)
    }
  };

  // Função para parar o timer
  const stopTimer = () => {
    setIsRunning(false)
  };

  // Função para reiniciar o timer
  const resetTimer = () => {
    setIsRunning(false)
    setRemainingTime(0)
    setInputTime('')
  };

  // useEffect para gerenciar a contagem regressiva
  useEffect(() => {
    let interval
    if (isRunning && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1) 
      }, 1000)
    } else if (remainingTime === 0 && isRunning) {
      setIsRunning(false)
      alert('O tempo acabou!')
    }

    return () => clearInterval(interval) // Limpa o intervalo quando o timer é parado ou o componente desmontado
  }, [isRunning, remainingTime]) // Re-executa sempre que o estado isRunning ou remainingTime mudar

  // Função para atualizar o tempo baseado no input do usuário
  const handleInputChange = (e) => {
    const value = e.target.value
    if (value >= 0) {
      setInputTime(value) // Atualiza o valor do input com o tempo inserido pelo usuário
    }
  };

  // Função para definir o tempo inicial ao submeter o formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputTime > 0) {
      setSeconds(Number(inputTime)) // Atualiza o estado de segundos com o valor inserido
      setRemainingTime(Number(inputTime)) // Também define o tempo restante com o valor inserido
    }
  };

  return (
    <>
    <div className='container'>
      <h1>Timer</h1>

      {/* Formulário para definir o tempo inicial */}
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <h2>Defina o tempo (segundos):</h2>
            <input
              type="number"
              value={inputTime}
              onChange={handleInputChange}
              disabled={isRunning} // Desabilita o input enquanto o timer está em execução
            />
          </label>
          <button type="submit" disabled={isRunning || inputTime <= 0}>
            Definir tempo
          </button>
        </form>
      </div>

      {/* Exibição do tempo restante */}
      <div>
        <h2>Tempo restante: {remainingTime} segundos</h2>
      </div>

      {/* Botões de controle do timer */}
      <div>
        {!isRunning ? (
          <button onClick={startTimer} disabled={remainingTime <= 0}>
            Iniciar
          </button>
        ) : (
          <button onClick={stopTimer}>Parar</button>
        )}
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
    </div>
    
    <div>
      <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
    </div>
    </>
  );
}

export default Timer
