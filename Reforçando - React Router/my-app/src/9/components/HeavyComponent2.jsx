import { useEffect } from 'react';

function HeavyComponent2() {
  useEffect(() => {
    console.log("HeavyComponent2 carregado");
  }, []);
  
  return (
    <div className="section">
      <h1>Componente Pesado 2</h1>
      <p>Este é outro componente pesado.</p>
      <p>Conteúdo adicional...</p>
    </div>
  );
}

export default HeavyComponent2;
