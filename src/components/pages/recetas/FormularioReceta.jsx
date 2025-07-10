import { Form, Button } from "react-bootstrap";

const FormularioReceta = () => {
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form className="my-4">
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control type="text" placeholder="Ej: Receta de..." />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select>
            <option value="">Seleccione una opcion</option>
            <option value="Infusiones">Desayunos</option>
            <option value="Batidos">Platos principales</option>
            <option value="dulce">Postres</option>
            <option value="salado">Bebidas</option>
          </Form.Select>
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Describe brevemente la receta, sus ingredientes y el sabor"
            as="textarea"
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una receta deliciosa y fácil de preparar, ideal para compartir en familia o con amigos. Incluye ingredientes accesibles y pasos sencillos para lograr un plato sabroso y casero."
            as="textarea"
            rows={4}
          />
          <Form.Text className="text-danger"></Form.Text>
        </Form.Group>

        <Button type="submit" variant="success">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
