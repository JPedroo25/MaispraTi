import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Componente montado');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Contador atualizado');
    }
  }

  componentWillUnmount() {
    console.log('Componente será desmontado');
  }

  incrementar = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  decrementar = () => {
    this.setState(prevState => {
      if (prevState.count > 0) {
        return { count: prevState.count - 1 };
      }
      return null; // Não faz nada se count for 0
    });
  };

  resetar = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.count}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
        <button onClick={this.decrementar}>Decrementar</button>
        <button onClick={this.resetar}>Resetar</button>
      </div>
    );
  }
}

export default Contador;