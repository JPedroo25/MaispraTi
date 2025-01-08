import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Form.css'
import './Erro.css'
import './BemVindo'

function Formulario() {
  const navigate = useNavigate()

  const goToBiblioteca = () => {
    navigate('/')
}

  // Estados para armazenar os valores dos campos
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  // Estados para armazenar mensagens de erro
  const [erroNome, setErroNome] = useState('')
  const [erroEmail, setErroEmail] = useState('')
  const [erroSenha, setErroSenha] = useState('')

  // Estado para o sucesso ou erro do envio
  const [mensagem, setMensagem] = useState('')

  const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  // Função que é chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault()
    setMensagem('')

    // Validações
    const validoNome = nameValidate()
    const validoEmail = emailValidate()
    const validoSenha = senhaValidate()

    // Se tudo for válido, simula o envio
    if (validoNome && validoEmail && validoSenha) {
      setMensagem('Formulário enviado com sucesso!')
      navigate('/BemVindo', { state: { nome } })
    } else {
      setMensagem('Por favor, corrija os erros antes de enviar.')
    }
  };

  const nameValidate = () => {
    if (nome.length < 3) {
      setErroNome('Nome deve ter no mínimo 3 caracteres!')
      return false
    } else {
      setErroNome('')
      return true
    }
  };

  const emailValidate = () => {
    if (!emailRegex.test(email)) {
      setErroEmail('Digite um email válido!')
      return false
    } else {
      setErroEmail('')
      return true
    }
  };

  const senhaValidate = () => {
    if (senha.length < 8) {
      setErroSenha('Sua senha deve conter no mínimo 8 caracteres!')
      return false
    } else {
      setErroSenha('')
      return true
    }
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h1 className="formulario-titulo">Formulário</h1>

        <label htmlFor="nome">Digite seu nome completo:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Nome completo"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          onBlur={nameValidate}
          className={`inputs-required ${erroNome ? 'error' : ''}`}
        />
        {erroNome && <span className="span-required">{erroNome}</span>}

        <label htmlFor="email">Digite seu Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="seuEmail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={emailValidate}
          className={`inputs-required ${erroEmail ? 'error' : ''}`}
        />
        {erroEmail && <span className="span-required">{erroEmail}</span>}

        <label htmlFor="senha">Sua senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          onBlur={senhaValidate}
          className={`inputs-required ${erroSenha ? 'error' : ''}`}
        />
        {erroSenha && <span className="span-required">{erroSenha}</span>}

        <button type="submit" className="submit">ENVIAR</button>
      </form>

      {/* Mensagem de sucesso ou erro */}
      {mensagem && <p className={`mensagem ${mensagem.includes('erro') ? 'erro' : 'sucesso'}`}>{mensagem}</p>}

    <div>
      <button className="BotãoDeVolta" onClick={goToBiblioteca}>Voltar para a Página Principal</button>
    </div>
    </>
  );
}

export default Formulario;
