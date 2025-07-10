import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";

const Inicio = () => {
  return (
    <section className="mainSection">
      <img
        className="banner"
        src="https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg"
        alt="Libro de recetas"
      />
      <Container className="mt-5">
        <h1 className="display-4">Nuestras recetas</h1>
        <hr />
        <Row>
          <CardReceta></CardReceta>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
