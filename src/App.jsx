import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Perfil from './Components/Perfil'
import Registro from './Components/Registro'
import Iniciar_sesion from './Components/Iniciar_sesion'
import Home from './Components/Home'

function App() {
  const [auth, setauth] = useState({ nombre: "", telefono: "" })

  const autenticar = (nombre, telefono) => {
    setauth({ nombre, telefono })
  }

  const cerrarsesion = () => {
    setauth({ nombre: "", telefono: "" })
  }

  return (
    <>
      <div className='container-fluid'>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Tienda">
            <Home />
          </Tab>
          <Tab eventKey="profile" title="Iniciar sesion" disabled={auth.nombre.length !== 0}>
            <Iniciar_sesion autenticar={autenticar} />
          </Tab>
          <Tab eventKey="contact" title="Registrarse" disabled={auth.nombre.length !== 0}>
            <Registro />
          </Tab>
          <Tab eventKey="Perfil" title="Perfil" disabled={auth.nombre.length === 0}>

            <Perfil />
          </Tab>
        </Tabs>


      </div>
    </>
  )
}

export default App
