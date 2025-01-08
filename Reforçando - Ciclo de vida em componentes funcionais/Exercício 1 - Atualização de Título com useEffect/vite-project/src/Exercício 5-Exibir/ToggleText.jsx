import React, { useState } from 'react';

const ToggleText = () => {
  // Estado para controlar a visibilidade do texto
  const [isVisible, setIsVisible] = useState(false);

  // Função para alternar o estado de visibilidade
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className='Exercicio5'>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Esconder' : 'Mostrar'} Texto
      </button>
      
      {/* Exibe o texto somente se isVisible for true */}
      {isVisible && <p>Este é o texto que pode ser mostrado ou escondido.</p>}
    </div>
  );
};

export default ToggleText;
