import { Card,Button } from "react-bootstrap"

const Perfil = ({usuario,cerrarsesion}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYYrtwH9VPslhObiTFAirWq76juu6ka5c4Q&s" />
            <Card.Body>
                <Card.Title>{usuario.nombre!==""?usuario.nombre:"Debe inciar sesion"}</Card.Title>
                <Card.Text>
                    {usuario.telefono!==""?usuario.telefono:""}
                </Card.Text>
                <Button variant="danger" onClick={()=>cerrarsesion()}>Cerrar sesion</Button>
            </Card.Body>
        </Card>
    )
}

export default Perfil