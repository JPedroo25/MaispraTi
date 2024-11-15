import './App.css'
import './Navigation.css'
import './Main.css'
import Navigation from './components/Navigation.jsx'
import Main from './components/Main.jsx'
import Stickers from './components/Stickers.jsx'
import Kits from './components/Kits.jsx'
import Relatos from './components/Relatos.jsx'
import OndeComprar from './components/OndeComprar.jsx'
import FaleComigo from './components/FaleComigo.jsx'
import SpotifyPlaylist from './components/SpotiyPlaylist.jsx'
import FormContainer from './components/FormContainer.jsx'
import FormScript from './components/FormScript.jsx'
import Footer from './components/Footer.jsx'
import NavLink from './components/NavLink.jsx'


function App() {

  return (
    <>
      <Navigation/>
      <Main/>
      <Stickers/>
      <Kits/>
      <Relatos/>
      <OndeComprar/>
      <FaleComigo/>
      <SpotifyPlaylist/>
      <FormContainer/>
      <FormScript/>
      <Footer/>
      <NavLink/>
    </>
  )
}

export default App