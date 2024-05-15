import { useEffect, useState } from "react"
import { Image, Card, ListGroup, Spinner, Alert } from "react-bootstrap"

const Home = () => {
    const [productos, setproductos] = useState([])
    const [cargando, setcargando] = useState(true)
    const [error, seterror] = useState("")
    const method = "GET"
    useEffect(() => {
        console.log("Consultando productos")
        fetch("https://ecomerce-bk.onrender.com/leerProductos", { method })
            .then((response) => response.json())
            .then((result) => {
                setproductos(result.productos)
                setcargando(false)
            })
            .catch((error) => {
                console.error(error)
                seterror(String(error))
                setcargando(false)
            });

    }, [])

    if (cargando) {
        return (<Spinner animation="border" variant="danger" />)
    } else if (!cargando && error.length > 0) {
        return (
            <Alert variant="danger" >
                <Alert.Heading>Tuvimos un problema al buscar los productos!</Alert.Heading>
                <p>
                    {error}
                </p>
            </Alert>
        )
    }
    return (
        <div className='container-fluid '>
            <Image src="https://http2.mlstatic.com/D_NQ_844899-MLA76210895631_052024-OO.webp" fluid></Image>
            <div className='container-fluid pt-4'>
                {
                    productos.length > 0 ?
                        productos.map((producto) =>
                            <Card key={producto.Id} className="mt-4" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={producto.Imagen} />
                                <Card.Body>
                                    <Card.Text>
                                        {producto.Descrpcion}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Precio: ${producto.Precio}</ListGroup.Item>
                                    <ListGroup.Item>Existencias: {producto.Existencias}</ListGroup.Item>
                                </ListGroup>
                            </Card>
                        )
                        :
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

                }
            </div>
        </div>
    )
}
export default Home