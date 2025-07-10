import { Col, Card, Button } from "react-bootstrap";

const cardReceta = ({ receta }) => {
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
          <Card.Title className="primary-font">
            {receta.nombreReceta}
          </Card.Title>
          <Card.Text>
            {receta.descripcionBreve}
            <br className="mb-2" />
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
