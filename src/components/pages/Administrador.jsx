import { Button, Table } from "react-bootstrap";
import ItemReceta from "./recetas/ItemReceta";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const Administrador = ({ recetas, setRecetas }) => {
  const navigate = useNavigate();

  const irACrearReceta = () => {
    navigate("/administrador/crear");
  };

  const eliminarReceta = (id) => {
    Swal.fire({
      title: "¿Estás seguro de eliminar esta receta?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        const recetasFiltradas = recetas.filter((receta) => receta.id !== id);
        setRecetas(recetasFiltradas);
        Swal.fire("Eliminada", "La receta ha sido eliminada.", "success");
      }
    });
  };

  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Recetas disponibles</h1>
        <div>
          <Button className="btn btn-primary" onClick={irACrearReceta}>
            <i className="bi bi-file-earmark-plus"> Crear</i>
          </Button>
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
          {recetas.map((receta, indice) => (
            <ItemReceta
              key={receta.id}
              receta={receta}
              fila={indice + 1}
              eliminarReceta={eliminarReceta}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
