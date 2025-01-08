import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goToAtividade1 = () => {
        navigate('/ContadorSimples')
    }

    const goToAtividade2 = () => {
        navigate('/SimuladorDeCor')
    }

    const goToAtividade3 = () => {
        navigate('/Form')
    }

    const goToAtividade4 = () => {
        navigate('/Timer')
    }

    const goToAtividade5 = () => {
        navigate('/Filtrar')
    }

    const goToAtividade6 = () => {
        navigate('/Formulario')
    }

    const goToAtividade7 = () => {
        navigate('/PostList')
    }

    const goToAtividade8 = () => {
        navigate('/Galeria')
    }

    const goToAtividade9 = () => {
        navigate('/TimerReverso')
    }

    const goToAtividade10 = () => {
        navigate('/Início')
    }

    return(
        <div className='container'>
            <h1>Página Principal</h1>
            <h2>Sinta-se livre para navegar entre os exercícios através dos botões abaixo:</h2>

            <button onClick={goToAtividade1}>Atividade 01</button>
            <button onClick={goToAtividade2}>Atividade 02</button>
            <button onClick={goToAtividade3}>Atividade 03</button>
            <button onClick={goToAtividade4}>Atividade 04</button>
            <button onClick={goToAtividade5}>Atividade 05</button>
            <button onClick={goToAtividade6}>Atividade 06</button>
            <button onClick={goToAtividade7}>Atividade 07</button>
            <button onClick={goToAtividade8}>Atividade 08</button>
            <button onClick={goToAtividade9}>Atividade 09</button>
            <button class="btn-10" onClick={goToAtividade10}>Atividade 10</button>
        </div>
    )
}

export default Home