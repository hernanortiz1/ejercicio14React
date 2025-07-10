import { Button } from "react-bootstrap";

const ItemReceta = () => {
  return (
    <tr>
      <td className="text-center">{/* fila */} </td> 
      
      <td> {/* nombreReceta */}</td>
      <td className="text-center">
        <img
          src= ""//imagen 
          className="img-thumbnail"
          alt= "" //nombreReceta
        ></img>
      </td>
      <td>{/* categoria */}</td>
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
