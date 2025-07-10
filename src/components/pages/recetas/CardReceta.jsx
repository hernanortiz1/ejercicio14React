import { Col, Card, Button } from "react-bootstrap";

const cardReceta = () => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src="https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg"
            alt="Libro de recetas"
            className="card-img-top-nueva"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">Libro de receta</Card.Title>
          <Card.Text>
            Descripción: Receta con frutas <br className="mb-2" />
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="success" className="me-2">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default cardReceta;
