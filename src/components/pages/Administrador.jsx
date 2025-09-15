import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { leerReceta } from "../../helpers/queries";
import { MoonLoader } from "react-spinners";

const Administrador = ({ borrarReceta }) => {
  const [listaRecetas, setListaRecetas] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerRecetas();
  }, []);

  const obtenerRecetas = async () => {
     setCargando(true)
    const respuesta = await leerReceta();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaRecetas(datos);
    } else {
      console.info("error al buscar receta");
    }
     setCargando(false); 
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <div>
          <Link className="btn btn-primary" to={"/administrador/crear"}>
            <i className="bi bi-file-earmark-plus"> Crear</i>
          </Link>
        </div>
      </div>
      <hr />

     {cargando ? (
        <div className="d-flex justify-content-center my-5">
          <MoonLoader size={60} color="#3649d7ff"  /> 
        </div>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Cod</th>
              <th>Receta</th>
              <th>URL de Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {listaRecetas.map((receta, indice) => (
              <ItemReceta
                key={receta._id}
                receta={receta}
                fila={indice + 1}
                setListaRecetas={setListaRecetas}
                borrarReceta={borrarReceta}
              />
            ))}
          </tbody>
        </Table>
      )}
    </section>
  );
};

export default Administrador;
