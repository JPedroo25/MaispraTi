import { Link, useNavigate } from 'react-router-dom'
import './header.css'

function Sobre() {

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
            <button id='btnAtivo' onClick={goToSobre}>Sobre</button>
            <button onClick={goToContato}>Contato</button>
            <button onClick={goToServiços}>Serviços</button>
        </div>
        
        <div className='container'>
            <h1>Sobre</h1>
            <h2>Página feita como uma atividade do curso</h2>
        </div>

        <div>
            <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
        </div>
   </>
   )
}

export default Sobre