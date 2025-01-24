import { useState, useEffect } from 'react';

const TitleUpdater = () => {
  
  const [number, setNumber] = useState(0);

  useEffect(() => {
    document.title = `Número Atual: ${number}`;
  }, [number]);

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