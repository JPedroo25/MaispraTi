import { useEffect } from 'react';

function HeavyComponent1() {
  useEffect(() => {
    console.log("HeavyComponent1 carregado");
  }, []);
  
  return (
    <div className="section">
      <h1>Componente Pesado 1</h1>
      <p>Este é um componente pesado que simula carregamento dinâmico.</p>
      <p>Conteúdo extra grande...</p>
    </div>
  );
}

export default HeavyComponent1;
