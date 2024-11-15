import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ProtectedRoute from './components/ProtectedRoute'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <ProtectedRoute>
            <Route path='/about' element={ <About /> }/>
          </ProtectedRoute>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
