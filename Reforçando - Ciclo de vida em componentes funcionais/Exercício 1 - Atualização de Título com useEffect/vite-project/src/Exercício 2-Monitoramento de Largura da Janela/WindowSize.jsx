// WindowSize.jsx
import { useState, useEffect } from 'react';

const WindowSize = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='Exercicio2'>
      <h1>Largura da Janela</h1>
      <p>A largura atual da janela é: {windowWidth}px</p>
    </div>
  );
};

export default WindowSize;