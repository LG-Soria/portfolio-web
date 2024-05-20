
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import "./Components/Navigation/navigation.css"
import Heading from './Components/Heading/Heading'
import './Components/Heading/heading.css'
import './Components/Proyectos/proyectos.css'
import Contacto from './Components/Contacto/Contacto'
import './Components/Contacto/contacto.css'
import Proyectos from './Components/Proyectos/Proyectos'



function App() {

  return (
    <div className='app'>
      <Navigation />
      <Heading />
      <Proyectos />
      <Contacto />
    </div>
  )
}

export default App
