import { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"

const Iniciar_sesion = ({ autenticar }) => {
    const [cargando, setcargando] = useState(false)
    const [error, seterror] = useState("")
    const [exito, setexito] = useState(false)
    const method = "GET"
    const [telefono, settelefono] = useState("")
    const [password, setpassword] = useState("")

    const iniciar = () => {
        if (telefono.length === 0 || password.length === 0) {
            seterror("Verifique los campos")
        } else {
            setcargando(true)

            const requestOptions = {
                method,
                redirect: "follow"
            };

            fetch(`https://ecomerce-bk.onrender.com/IniciarSesion?CELULAR=${telefono}&CONTRASEÑA=${password}`, requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    
                    autenticar(result.usuario.NOMBRE, result.usuario.CELULAR)
                    setexito(true)
                    setcargando(false)
                    settelefono("")
                    setpassword("")
                })
                .catch((error) => {
                    console.error(error)
                    seterror(String(error))
                    setcargando(false)
                });
        }
    }

    return (
        <div className='container-sm'>
            {exito ? <Alert variant="success" onClose={() => setexito(false)} dismissible>
                <Alert.Heading>Usuario registrado con exito</Alert.Heading>
            </Alert> : null}
            {error.length > 0 ? <Alert variant="danger" onClose={() => seterror("")} dismissible>
                <Alert.Heading>Tuvimos un error!</Alert.Heading>
                <p>
                    {error}
                </p>
            </Alert> : null}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Numero de Telefono</Form.Label>
                    <Form.Control type="text" placeholder="Telefono" value={telefono} onChange={(e) => settelefono(e.target.value)} />
                    <Form.Text className="text-muted">
                        No compartiremos tu numero de telefono con nadie.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </Form.Group>

                {!cargando ? <Button variant="primary" type="button" onClick={iniciar}>
                    Iniciar sesion
                </Button> :
                    <Button variant="primary" type="button" disabled>
                        Cargando...
                    </Button>}
            </Form>
        </div>
    )
}
export default Iniciar_sesion