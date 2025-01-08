import { Link, useNavigate } from 'react-router-dom'
import './header.css'

function Serviços() {

    const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

    const goToInício = () => {
        navigate('/Início')
    }

    const goToSobre = () => {
        navigate('/Sobre')
    }

    const goToContato = () => {
        navigate('/Contato')
    }

    const goToServiços = () => {
        navigate('/Serviços')
    }

    return(
        <>
        <div className='header'>
            <button onClick={goToInício}>Início</button>
            <button onClick={goToSobre}>Sobre</button>
            <button onClick={goToContato}>Contato</button>
            <button id='btnAtivo' onClick={goToServiços}>Serviços</button>
        </div>
        
        <div className='container'>
            <h1>Serviços</h1>
            <h2>Navegar entre as páginas</h2>
        </div>

        <div>
            <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
        </div>
    </>
)
}

export default Serviços