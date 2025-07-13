import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const ItemReceta = ({ receta, fila, eliminarReceta }) => {
  const navigate = useNavigate();

  const handleEditar = (id) => {
    navigate(`/administrador/editar/${id}`);
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
        <Button
          variant="warning"
          className="me-lg-2"
          onClick={() => handleEditar(receta.id)}
        >
          <i className="bi bi-pencil-square"></i>
        </Button>

         {/* BOTON ELIMINAR */}
        <Button variant="danger" onClick={() => eliminarReceta(receta.id)}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
