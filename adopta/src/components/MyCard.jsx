import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Colores from "./Tags";

function Tarjeta(props) {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={props.imagen} />
      <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>{props.descripcion}</Card.Text>
        <Colores color={props.color} raza={props.raza} />
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;
