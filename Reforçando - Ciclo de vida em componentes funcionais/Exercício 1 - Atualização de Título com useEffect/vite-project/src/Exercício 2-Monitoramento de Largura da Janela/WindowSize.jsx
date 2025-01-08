// WindowSize.jsx
import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  // Criação do estado para armazenar a largura da janela
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Usando useEffect para adicionar e remover o event listener
  useEffect(() => {
    // Função que atualiza a largura da janela
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Adiciona o event listener para redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Remove o event listener ao desmontar o componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // O array de dependências vazio garante que o efeito seja executado apenas uma vez, ao montar o componente

  return (
    <div className='Exercicio2'>
      <h1>Largura da Janela</h1>
      <p>A largura atual da janela é: {windowWidth}px</p>
    </div>
  );
};

export default WindowSize;