import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.css";

function Colores(props) {
  console.log(props);
  return (
    <div>
      <Badge bg={props.color}>{props.raza}</Badge>
    </div>
  );
}

export default Colores;
