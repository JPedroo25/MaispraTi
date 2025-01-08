import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Filtrar = () => {

  const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

  const [filtro, setFiltro] = useState('');

  const nomes = ['Ana', 'Carlos', 'João', 'Maria', 'José', 'Pedro', 'Paula'];

  const handleChange = (event) => {
    setFiltro(event.target.value);
  };

  // Filtra os nomes digitados, ignorando letras maiúsculas e minúsculas utilizando "toLowerCase".
  const nomesFiltrados = nomes.filter(nome =>
    nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <>
    <div className='container'>
      <h1>Lista de Nomes</h1>
      
      {/* Campo de entrada para filtro */}
      <input
        type="text"
        placeholder="Filtrar nomes"
        value={filtro}
        onChange={handleChange}
      />
      
      {/* Exibindo a lista de nomes filtrados */}
      <ul>
        {nomesFiltrados.map((nome, index) => (
          <li className="ListaDaAtividade5" key={index}>{nome}</li>
        ))}
      </ul>
    </div>
    
    <div>
      <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
      </div>
    </>
  );
};

export default Filtrar;