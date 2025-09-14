import { Link, useParams} from "react-router";
import { Button, Card, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerRecetaPorID } from "../../../helpers/queries.js";


const DetalleReceta = ({ recetas }) => {
  const { id } = useParams();
  const [receta, setReceta] = useState({})

  useEffect(
    ()=>{
      obtenerReceta()
    },[]
  )
  const obtenerReceta = async () => {
  const respuesta = await obtenerRecetaPorID(id)
    if (respuesta.status ===200) {
     
      const respuesta = await obtenerRecetaPorID(id);

      if (respuesta.status === 200) {
        const recetaBuscada = await respuesta.json();
        setReceta(recetaBuscada)
      }
    }
  };

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
            <Link variant="primary" size="lg" to={"/administrador"}>
              Volver
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
