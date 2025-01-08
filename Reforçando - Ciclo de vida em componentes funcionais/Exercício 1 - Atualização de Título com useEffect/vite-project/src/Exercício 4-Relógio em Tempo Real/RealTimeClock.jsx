import React, { useState, useEffect } from 'react';

const RealTimeClock = () => {
  // Estado para armazenar a hora atual
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect para configurar o intervalo de atualização
  useEffect(() => {
    // Define o intervalo para atualizar a hora a cada segundo
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []); // O array vazio [] garante que o useEffect seja executado apenas uma vez ao montar o componente

  return (
    <div className='Exercicio4'>
      <h1>Relógio Digital</h1>
      <p>{time}</p>
    </div>
  );
};

export default RealTimeClock;
