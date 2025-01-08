import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function BemVindo() {

    const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

    const goToAtividade6 = () => {
        navigate('/Formulario')
    }

    const location = useLocation()
    const nome = location.state?.nome || "Visitante" //caso não tiver nome, usaremos "Visitante"

    return (
        <>
        <div className='container'>
            <h1>Bem Vindo {nome}!</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpafcXgAnnNu6eshlRZ48jRYystlLMzjr8WQ&s" alt="Emoji Feliz"></img>
        </div>
        
        <div>
        <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>

        <button className="BotãoDeVolta" onClick={goToAtividade6}>Voltar para o Formulário</button>
        </div>
        </>
    )
}

export default BemVindo