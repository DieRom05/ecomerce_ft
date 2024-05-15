import { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"

const Registro = () => {
    const [telefono, settelefono] = useState("")
    const [nombre, setnombre] = useState("")
    const [password, setpassword] = useState("")
    const [verificacion, setverificacion] = useState("")
    const [cargando, setcargando] = useState(false)
    const [error, seterror] = useState("")
    const [exito, setexito] = useState(false)
    const method = "POST"

    const registrar = () => {

        setcargando(true)
        if (password !== verificacion) {
            seterror("La contraseña no coincide, verifique los campos")
        } else if (nombre.length === 0 || telefono.length === 0 || password.length === 0 || verificacion.length === 0) {
            seterror("Faltan campos por completar")
        } else {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "NOMBRE": nombre,
                "CELULAR": telefono,
                "CONTRASEÑA": password
            });

            const requestOptions = {
                method ,
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://ecomerce-bk.onrender.com/crearUsuario", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    setexito(true)
                    setcargando(false)
                    setnombre("")
                    settelefono("")
                    setpassword("")
                    setverificacion("")
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
                    <Form.Control type="text" placeholder="Ingrese telefono" value={telefono} onChange={(e) => settelefono(e.target.value)} />
                    <Form.Text className="text-muted">
                        No compartiremos tu numero de telefono con nadie.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su nombre" value={nombre} onChange={(e) => setnombre(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Verificacion</Form.Label>
                    <Form.Control type="password" placeholder="verificacion de contraseña" value={verificacion} onChange={(e) => setverificacion(e.target.value)} />
                </Form.Group>

                {!cargando ?
                    <Button variant="primary" type="button" onClick={registrar}>
                        Registrarse
                    </Button> :
                    <Button variant="primary" type="button" disabled>
                        Cargando...
                    </Button>}
            </Form>
        </div>
    )
}
export default Registro