import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    const goToContato = () => {
        navigate('/contato')
    }

    const goToServicos = () => {
        navigate('/servicos')
    }

    return(
        <div className='container'>
            <h1>Home Page</h1>

            <button onClick={goToAbout}>Go to About</button>
            <button onClick={goToContato}>Go to Contact</button>
            <button onClick={goToServicos}>Go to Services</button>
        </div>
    )
}

export default Home