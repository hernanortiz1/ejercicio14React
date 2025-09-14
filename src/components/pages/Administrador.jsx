import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { leerReceta } from "../../helpers/queries";


const Administrador = ({ recetas, setRecetas, borrarReceta }) => {
 
const [listaRecetas, setListaRecetas] = useState([])

useEffect(()=>{
obtenerRecetas()
},[])

const obtenerRecetas = async ()=>{
  const respuesta = await leerReceta()
  if(respuesta.status === 200){
    const datos = await respuesta.json()
    setListaRecetas(datos)
  }else{
    console.info("error al buscar receta")
  }
}

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
    </section>
  );
};

export default Administrador;
