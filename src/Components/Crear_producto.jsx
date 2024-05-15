import { useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"

const Crear_producto = () => {
    const [imagen, setimagen] = useState("")
    const [descripcion, setdescripcion] = useState("")
    const [precio, setprecio] = useState("")
    const [existencias, setexistencias] = useState("")
    const [cargando, setcargando] = useState(false)
    const [error, seterror] = useState("")
    const [exito, setexito] = useState(false)
    const method = "POST"

    const registrar = () => {
        if (imagen.length === 0 || descripcion.length === 0 || precio.length === 0 || existencias.length === 0) {
            seterror("Verifique que ningun campo este vacio")
        } else {
            setcargando(true)
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "Imagen": imagen,
                "Descripcion": descripcion,
                "Precio": precio,
                "Existencias": existencias
            });

            const requestOptions = {
                method ,
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://ecomerce-bk.onrender.com/crearProducto", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    setexito(true)
                    setcargando(false)
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
                <Alert.Heading>Producto creado con exito</Alert.Heading>
            </Alert> : null}
            {error.length > 0 ? <Alert variant="danger" onClose={() => seterror("")} dismissible>
                <Alert.Heading>Tuvimos un error!</Alert.Heading>
                <p>
                    {error}
                </p>
            </Alert> : null}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Imagen del producto</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese url de la imagen" value={imagen} onChange={(e) => setimagen(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Descripción del producto</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese descripcion" value={descripcion} onChange={(e) => setdescripcion(e.target.value)} />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>precio</Form.Label>
                    <Form.Control type="text" placeholder="precio" value={precio} onChange={(e) => setprecio(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>existencias del producto</Form.Label>
                    <Form.Control type="text" placeholder="existencias" value={existencias} onChange={(e) => setexistencias(e.target.value)} />
                </Form.Group>

                {!cargando ?
                    <Button variant="primary" type="button" onClick={registrar}>
                        Crear el producto
                    </Button> :
                    <Button variant="primary" type="button" disabled>
                        Cargando...
                    </Button>}
            </Form>
        </div>
    )
}
export default Crear_producto