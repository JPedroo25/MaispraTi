import React from "react"

class Contador extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Componente Montado")
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            console.log("Contador Atualizado")
        }
    }

    componentWillUnmount() {
        console.log("Componente Será Desmontado")
    }

    incrementar = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }

    decrementar = () => {
        this.setState(prevState => {
            if (prevState.count > 0) {
                return {count: prevState.count -1}
            }
            return null
        })
    }

    resetar = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <div class="container">
                <h1>Contador: {this.state.count}</h1>
                <button onClick={this.incrementar}>Incrementar</button>
                <button onClick={this.decrementar}>Decrementar</button>
                <button onClick={this.resetar}>Resetar</button>
            </div>
        )
    }
}

export default Contador