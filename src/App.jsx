import { useState } from 'react'
import { Button, Card, Form, Image, Tab, Tabs, ListGroup } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container-fluid'>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Tienda">
            <div className='container-fluid '>
              <Image src="https://http2.mlstatic.com/D_NQ_844899-MLA76210895631_052024-OO.webp" fluid></Image>
              <div className='container-fluid pt-4'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrXvYocJ0bqQE0Nk3N9W7GWqtL_pyVSk2tvg&s" />
                  <Card.Body>
                    <Card.Text>
                      Descripcion del producto
                    </Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Precio: $XXXXXX</ListGroup.Item>
                    <ListGroup.Item>Existencias: XXXXXXXXX</ListGroup.Item>
                  </ListGroup>
                </Card>
              </div>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Iniciar sesion">
            <div className='container-sm'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Numero de Telefono</Form.Label>
                  <Form.Control type="text" placeholder="Telefono" />
                  <Form.Text className="text-muted">
                    No compartiremos tu numero de telefono con nadie.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Iniciar sesion
                </Button>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="contact" title="Registrarse">
            <div className='container-sm'>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Numero de Telefono</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese telefono" />
                  <Form.Text className="text-muted">
                    No compartiremos tu numero de telefono con nadie.
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Verificacion</Form.Label>
                  <Form.Control type="password" placeholder="verificacion de contraseña" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Registrarse
                </Button>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="Perfil" title="Perfil">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYYrtwH9VPslhObiTFAirWq76juu6ka5c4Q&s" />
              <Card.Body>
                <Card.Title>Nombre del usuario</Card.Title>
                <Card.Text>
                  Celular del usuario
                </Card.Text>
                <Button variant="danger">Cerrar sesion</Button>
              </Card.Body>
            </Card>
          </Tab>
        </Tabs>


      </div>
    </>
  )
}

export default App
