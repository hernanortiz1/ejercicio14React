import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import { leerReceta, borrarRecetaPorID } from "../../../helpers/queries";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, fila, setListaRecetas }) => {

   const eliminarReceta = () => {
      Swal.fire({
        title: "Eliminar receta",
        text: "no puede revertir este paso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#146c43",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const respuesta = await borrarRecetaPorID(receta._id);
  
          if (respuesta.status === 200) {
            Swal.fire({
              title: "Receta eliminada",
              text: `La receta ${receta.nombreReceta} fue eliminada`,
              icon: "success",
            });
            
            const respuestaReceta = await leerReceta()
            const recetasActualizadas = await respuestaReceta.json()
            setListaRecetas(recetasActualizadas)
          } else {
            Swal.fire({
              title: "Ocurrio un error",
              text: `La receta ${receta.nombreReceta} NO fue eliminada`,
              icon: "error",
            });
          }
        }
      });
    };

  return (
    <tr>
      <td className="text-center">{fila} </td>

      <td> {receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src={receta.imagen}
          className="img-thumbnail"
          alt={receta.nombreReceta}
        ></img>
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        {/* BOTON EDITAR */}
        <Link
          variant="warning"
          className="mb-2 me-md-2 mb-md-0 btn btn-warning"
          to={"/administrador/editar/"+receta._id}
        >
          <i className="bi bi-pencil-square"></i>
        </Link>

        {/* BOTON ELIMINAR */}
        <Button variant="danger" onClick={eliminarReceta}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
