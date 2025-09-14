import { useParams, useNavigate } from "react-router";
import { Button, Card, Container } from "react-bootstrap";

const DetalleReceta = ({ recetas }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const receta = recetas.find((receta) => receta._id === id);
  if (!receta) {
    return (
      <Container className="mt-5">
        <h2>No se encontró la receta</h2>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Card className="rounded rounded-3 shadow">
        <Card.Img variant="top" src={receta.imagen} alt={receta.nombreReceta} />
        <Card.Body>
          <Card.Title className="text-center fs-1 border-bottom pb-3">
            {receta.nombreReceta}
          </Card.Title>
          <Card.Text className="fs-5 border-3 shadow p-3 rounded-3 bg-primary-subtle">
            <strong>Categoría:</strong> {receta.categoria}
          </Card.Text>
          <Card.Text className="fs-5 border-3 shadow p-3 rounded-3 bg-primary-subtle">
            <strong>Descripción breve:</strong> {receta.descripcion_breve}
          </Card.Text>
          <Card.Text className="fs-5 border-3 shadow p-3 rounded-3 bg-primary-subtle mb-5">
            <strong>Descripción amplia:</strong> {receta.descripcion_amplia}
          </Card.Text>
          <div className="text-center d-grid gap-2 ">
            <Button variant="primary" size="lg" onClick={() => navigate("/")}>
              Volver
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
