import { useState } from 'react';

const ToggleText = () => {
 
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className='Exercicio5'>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder' : 'Mostrar'} Texto
      </button>
      
      {isVisible && <p>Este é o texto que pode ser mostrado ou escondido.</p>}
    </div>
  );
};

export default ToggleText;
