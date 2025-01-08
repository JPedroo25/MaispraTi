import { Link, useNavigate } from 'react-router-dom'
import './header.css'

function Início() {
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
            <button id='btnAtivo' onClick={goToInício}>Início</button>
            <button onClick={goToSobre}>Sobre</button>
            <button onClick={goToContato}>Contato</button>
            <button onClick={goToServiços}>Serviços</button>
        </div>
        
        <div className='container'>
            <h1>Página Inicial</h1>

            <button onClick={goToSobre}>Sobre</button>
            <button onClick={goToContato}>Contato</button>
            <button onClick={goToServiços}>Serviços</button>
        </div>

        <div>
            <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
        </div>
     </>
   )
}

export default Início