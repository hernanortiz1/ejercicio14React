import { Button } from "react-bootstrap";

const ItemReceta = ({receta, fila}) => {
  return (
    <tr>
      <td className="text-center">{fila} </td> 
      
      <td> {receta.nombreReceta}</td>
      <td className="text-center">
        <img
          src= {receta.imagen}//imagen 
          className="img-thumbnail"
          alt= {receta.nombreReceta} //nombreReceta
        ></img>
      </td>
      <td>{receta.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
