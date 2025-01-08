import React, { useState, useEffect } from 'react';

const PersistentCounter = () => {
  // Inicializa o contador com o valor do Local Storage, se disponível, ou com 0
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

  // Atualiza o Local Storage sempre que o contador mudar
  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  // Função para incrementar o contador
  const increment = () => setCounter(prevCounter => prevCounter + 1);

  // Função para decrementar o contador
  const decrement = () => setCounter(prevCounter => prevCounter - 1);

  return (
    <div className='Exercicio3'>
      <h1>Contador Persistente</h1>
      <p>Valor do contador: {counter}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default PersistentCounter;
