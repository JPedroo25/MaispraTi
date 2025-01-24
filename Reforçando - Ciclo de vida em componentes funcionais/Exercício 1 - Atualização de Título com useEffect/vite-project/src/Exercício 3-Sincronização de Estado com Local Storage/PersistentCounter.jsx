import { useState, useEffect } from 'react';

const PersistentCounter = () => {
  const [counter, setCounter] = useState(() => {
    const savedCounter = localStorage.getItem('counter');
    return savedCounter ? JSON.parse(savedCounter) : 0;
  });

  useEffect(() => {
    localStorage.setItem('counter', JSON.stringify(counter));
  }, [counter]);

  const increment = () => setCounter(prevCounter => prevCounter + 1);

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
