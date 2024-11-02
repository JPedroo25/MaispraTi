// import './App.css'
// import Greeting from './Greeting'

function Button(props) {
  return <button onClick={props.onClick}>Clique aqui!</button>
}

function App() {

  const handleClick = () => {
    alert("Botão clicado")
  }
  
  return (
    <>
     {/* <MyClassComponent/> */}
     {/* <LifeCycleFunctionalComponent/> */}
     {/* <Greeting name="Jaques"/> */}
    </>
  )
}

export default App
