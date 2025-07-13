import { Container, Row } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";

const Inicio = ({ recetas }) => {
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
          {recetas.length === 0 ? (
            <p>No hay recetas para mostrar.</p>
          ) : (
            recetas.map((receta, index) => (
              <CardReceta key={index} receta={receta} />
            ))
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
