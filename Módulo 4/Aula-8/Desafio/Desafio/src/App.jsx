import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '/pages/Home'
import About from '/pages/About'
import Contato from '/pages/Contato'
import Servicos from '/pages/Servicos'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={ <About /> }/>
          <Route path='/contato' element={ <Contato /> }/>
          <Route path='/servicos' element={ <Servicos /> }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
