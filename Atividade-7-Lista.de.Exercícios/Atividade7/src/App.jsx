import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home"
import Contador from "./pages/1-Contador Simples/ContadorSimples"
import SimuladorDeCor from './pages/2-Alteração De Cor De Fundo/CoresDeFundo'
import Form from "./pages/3-Lista De Tarefas/Form/"
import Timer from './pages/4-Temporizador Com UseEffect/4-TemporizadorComUseEffect'
import Filtrar from './pages/5-Filtro de Lista/FIltroDeLista/'
import Formulario from './pages/6-Formulário de Registro Simples/Formulario/'
import BemVindo from './pages/6-Formulário de Registro Simples/BemVindo'
import PostList from './pages/7-Aplicação de Requisição de Dados Simples/PostList'
import Galeria from './pages/8-Galeria de Imagens com Visualização Detalhada/Galeria'
import TimerReverso from './pages/9-Timer com Intervalo e Alerta/TimerReverso'
import Início from './pages/10-Componentes com Tabs Navegáveis/Início'
import Contato from './pages/10-Componentes com Tabs Navegáveis/Contato'
import Serviços from './pages/10-Componentes com Tabs Navegáveis/Serviços'
import Sobre from './pages/10-Componentes com Tabs Navegáveis/Sobre'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/ContadorSimples' element={ <Contador /> }/>
          <Route path='/SimuladorDeCor' element={ <SimuladorDeCor/> }/>
          <Route path='/Form' element={ <Form /> }/>
          <Route path='/Timer' element={ <Timer/> }/>
          <Route path='/Filtrar' element={ <Filtrar/> }/>
          <Route path='/Formulario' element={ <Formulario/> }/>
          <Route path='/BemVindo' element={ <BemVindo/> }/>
          <Route path='/PostList' element={ <PostList/> }/>
          <Route path='/Galeria' element={ <Galeria/> }/>
          <Route path='/TimerReverso' element={ <TimerReverso/> }/>
          <Route path='/Início' element={ <Início/> }/>
          <Route path='/Contato' element={ <Contato/> }/>
          <Route path='/Serviços' element={ <Serviços/> }/>
          <Route path='/Sobre' element={ <Sobre/> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App