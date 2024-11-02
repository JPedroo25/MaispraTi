import React from 'react';

// Exemplo de dados de produtos
const produtos = [
  { id: 1, nome: 'Produto 1', inStock: true },
  { id: 2, nome: 'Produto 2', inStock: false },
  { id: 3, nome: 'Produto 3', inStock: true },
  { id: 4, nome: 'Produto 4', inStock: false },
  { id: 5, nome: 'Produto 5', inStock: true },
];

class ListaDeProdutos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarDisponiveis: false,
    };
  }

  // Alterna a exibição de produtos disponíveis
  toggleMostrarDisponiveis = () => {
    this.setState(prevState => ({ mostrarDisponiveis: !prevState.mostrarDisponiveis }));
  };

  render() {
    const { mostrarDisponiveis } = this.state;

    // Filtra produtos disponíveis em estoque
    const produtosDisponiveis = produtos.filter(produto => produto.inStock);

    return (
      <div>
        <h1>Produtos</h1>
        <button onClick={this.toggleMostrarDisponiveis}>
          {mostrarDisponiveis ? 'Esconder Produtos Disponíveis' : 'Mostrar Produtos Disponíveis'}
        </button>

        {mostrarDisponiveis && (
          <>
            {produtosDisponiveis.length > 0 ? (
              <ul>
                {produtosDisponiveis.map(produto => (
                  <li key={produto.id}>{produto.nome}</li>
                ))}
              </ul>
            ) : (
              <p>Nenhum produto disponível em estoque.</p>
            )}
          </>
        )}
      </div>
    );
  }
}

export default ListaDeProdutos;
