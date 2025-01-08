// TitleUpdater.jsx
import React, { useState, useEffect } from 'react';

const TitleUpdater = () => {
  // Criação do estado para armazenar o número
  const [number, setNumber] = useState(0);

  // Usando useEffect para atualizar o título da aba do navegador sempre que o número mudar
  useEffect(() => {
    document.title = `Número Atual: ${number}`; // Atualiza o título da aba
  }, [number]); // Executa sempre que o número mudar

  // Funções para incrementar e decrementar o número
  const increment = () => setNumber(number + 1);
  const decrement = () => setNumber(number - 1);

  return (
    <div className='Exercicio1'>
      <h1>Atualizador de Título</h1>
      <p>Número Atual: {number}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default TitleUpdater;