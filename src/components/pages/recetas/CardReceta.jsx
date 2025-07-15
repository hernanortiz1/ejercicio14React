import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const cardReceta = ({ receta }) => {
  const navigate = useNavigate();

  const verDetalle = () => {
    navigate(`/detalle/${receta.id}`);
  };
 
 
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src={receta.imagen}
            alt={receta.nombreReceta}
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">
            {receta.nombreReceta}
          </Card.Title>
          <Card.Text>
            {receta.descripcionBreve}
            <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="primary" className="me-2" onClick={verDetalle}>
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default cardReceta;
