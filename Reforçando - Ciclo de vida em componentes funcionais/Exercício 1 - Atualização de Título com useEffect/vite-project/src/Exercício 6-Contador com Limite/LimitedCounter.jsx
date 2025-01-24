import { useState } from 'react';

const LimitedCounter = () => {

  const [counter, setCounter] = useState(0);
  const limit = 10;

  const increment = () => {
    if (counter < limit) {
      setCounter(prevCounter => prevCounter + 1);
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1);
    }
  };

  return (
    <div className='Exercicio6'>
      <h1>Contador Limitado</h1>
      <p>Valor do contador: {counter}</p>
      
      <button onClick={increment} disabled={counter >= limit}>
        Incrementar
      </button>
      
      <button onClick={decrement} disabled={counter <= 0}>
        Decrementar
      </button>
      
      {counter === limit && <p style={{ color: 'red' }}>Limite máximo atingido!</p>}
    </div>
  );
};

export default LimitedCounter;
