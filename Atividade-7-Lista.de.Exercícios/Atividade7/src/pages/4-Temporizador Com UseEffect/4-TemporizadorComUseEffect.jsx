import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Timer() {

    const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

    const[seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval

        if(isRunning) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [isRunning])

    const PausarRetomarTimer = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };

    const ReinicarTimer = () => {
        setIsRunning(false)
        setSeconds(0)
    } 

    return (
        <>
            <div className="container">
                <h1>Segundos: {seconds}</h1>
                <button onClick={PausarRetomarTimer}>
                    {isRunning ? 'Parar' : 'Iniciar'}
                </button>
                <button onClick={ReinicarTimer}>Reiniciar</button>
            </div>
        
            <div>
                <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
            </div>
        </>
    )
}

export default Timer