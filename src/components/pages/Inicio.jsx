import { Container, Row, Carousel } from "react-bootstrap";
import CardReceta from "./recetas/CardReceta";
import imagen1 from "../../assets/imgCarrouselInicio/img1.jpg";
import imagen2 from "../../assets/imgCarrouselInicio/img2.jpg";
import imagen3 from "../../assets/imgCarrouselInicio/img3.jpg";
import imagen4 from "../../assets/imgCarrouselInicio/img4.jpg";
import imagen5 from "../../assets/imgCarrouselInicio/img5.jpg";
import { useState, useEffect } from "react";
import { leerReceta } from "../../helpers/queries.js";

const Inicio = () => {
  return (
    <section className="mainSection">

        <Carousel fade interval={4000}>
          <Carousel.Item>
            <img
              src={imagen1}
              alt="imagen de waffles con frutas"
              className="d-block w-100 imgCarousel"
            />
            <Carousel.Caption className="shadow rounded-3 text-dark fondoTextoCarousel">
              <h3 className="titulo-carousel">Waffles con frutas</h3>
              <h5 className="d-none d-md-block">
                Disfruta de un desayuno saludable y lleno de energía.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={imagen2}
              alt="imagen de ensalada"
              className="d-block w-100 imgCarousel"
            />
            <Carousel.Caption className="shadow rounded-3 text-dark fondoTextoCarousel">
              <h3 className="titulo-carousel">Ensaladas frescas</h3>
              <h5 className="d-none d-md-block">
                Ideales para mantener una alimentación balanceada.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={imagen3}
              alt="imagen de fideos"
              className="d-block w-100 imgCarousel"
            />
            <Carousel.Caption className="shadow rounded-3 text-white fondoTextoCarousel">
              <h3 className="titulo-carousel">Pastas artesanales</h3>
              <h5 className="d-none d-md-block">
                Descubre sabores únicos en cada bocado.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={imagen4}
              alt="imagen de ensalada de frutas"
              className="d-block w-100 imgCarousel"
            />
            <Carousel.Caption className="shadow rounded-3 text-dark fondoTextoCarousel">
              <h3 className="titulo-carousel">Ensalada de frutas</h3>
              <h5 className="d-none d-md-block">
                La opción perfecta para un postre saludable.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              src={imagen5}
              alt="imagen de hamburguesa con papas fritas"
              className="d-block w-100 imgCarousel"
            />
            <Carousel.Caption className="shadow rounded-3 text-white fondoTextoCarousel">
              <h3 className="titulo-carousel">Hamburguesas caseras</h3>
              <h5 className="d-none d-md-block">
                Acompañadas de papas fritas crujientes.
              </h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


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
