import React, { useState, useEffect } from 'react';

const gerarCorAleatoria = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`; // Retorna a cor em formato RGB
};

const SimuladorDeCor = () => {
  const [mudando, setMudando] = useState(false);
  const [cor, setCor] = useState('#FFFFFF');

  useEffect(() => {
    let interval;

    if (mudando) {
      interval = setInterval(() => {
        const corAleatoria = gerarCorAleatoria();
        setCor(corAleatoria);
      }, 2000);
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar ou parar a mudança
  }, [mudando]);

  const toggleMudancaDeCor = () => {
    setMudando(prev => !prev);
  };

  return (
    <div style={{ height: '100vh', backgroundColor: cor, transition: 'background-color 0.5s' }}>
      <h1 style={{ color: '#FFF', textAlign: 'center'}}>
        {mudando ? 'Mudança de Cores Ativa' : 'Mudança de Cores Parada'}
      </h1>
      <button onClick={toggleMudancaDeCor} style={{ display: 'block', margin: '0 auto', padding: '10px 20px', fontSize: '16px' }}>
        {mudando ? 'Parar' : 'Iniciar'}
      </button>
    </div>
  );
};

export default SimuladorDeCor;
