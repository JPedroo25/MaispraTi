import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function PostList() {

  const navigate = useNavigate()

    const goToBiblioteca = () => {
        navigate('/')
    }

  // Estado para armazenar os posts, o estado de carregamento e o erro
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Função para buscar os posts
  const fetchPosts = async () => {
    setLoading(true); // Inicia o carregamento
    setError(null); // Limpa qualquer erro anterior

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erro ao carregar os posts')
      }
      const data = await response.json()
      setPosts(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  };

  // useEffect para carregar os posts ao carregar o componente
  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
    <div className='container'>
      <h1>Lista de Posts</h1>

      {/* Indicador de carregamento */}
      {loading && <p>Carregando posts...</p>}

      {/* Mensagem de erro */}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      {/* Lista de posts */}
      {!loading && !error && (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Botão para recarregar os dados */}
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Recarregando...' : 'Recarregar Posts'}
      </button>
    </div>
    
    <div>
      <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
    </div>
    </>
  );
}

export default PostList;
