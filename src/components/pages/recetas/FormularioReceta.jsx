import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioReceta = () => {
  const navigate = useNavigate();
  const [receta, setReceta] = useState("");
  const recetasLocalStorage =
    JSON.parse(localStorage.getItem("listaRecetas")) || [];

  const [recetas, setRecetas] = useState(recetasLocalStorage);

  const volverAdministrador = () => {
    navigate("/administrador");
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombreReceta: "",
      imagen: "",
      categoria: "",
      descripcionBreve: "",
      descripcionAmplia: "",
    },
  });

  useEffect(() => {
    console.log("desde use effect");

    localStorage.setItem("listaRecetas", JSON.stringify(recetas));
  }, [recetas]);

  const agregarRecetas = (datos) => {
    Swal.fire({
      title: "Datos guardados correctamente",
      text: `Receta: ${datos.nombreReceta}, categoria: ${datos.categoria}`,
      icon: "success",
      draggable: true,
    });

    setDatosCorrectos([...recetas, datos]);

    reset();
  };

  const borrarRecetas = (recetaEliminada) => {
    const indice = recetas.findIndex((item) => item === recetaEliminada);

    if (indice !== -1) {
      const datosNuevos = [...recetas];

      datosNuevos.splice(indice, 1);
      setRecetas(datosNuevos);
    }
  };

  const borrarReceta = (nombreReceta) => {
    const indice = tareas.findIndex((item) => item === nombreReceta);
    //actualizar estado tareas
    if (indice !== -1) {
      //copio el array original
      const nuevasRecetas = [...recetas];
      //elimino con splice y actualizo
      nuevasRecetas.splice(indice, 1);
      setRecetas(nuevasRecetas);
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nueva receta</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(agregarRecetas)}>
        <Form.Group className="mb-3" controlId="formNombreReceta">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Receta de..."
            onChange={(e) => setReceta(e.target.value)}
            {...register("nombreReceta", {
              required: "El titulo de la receta es un dato obligatorio",
              minLength: {
                value: 3,
                message:
                  "El titulo de la receta debe tener 3 caracteres como minimo ",
              },
              maxLength: {
                value: 80,
                message:
                  "El titulo de la receta debe tener 50 caracteres como máximo",
              },
            })}
          />
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
            <option value="" hidden>
              Seleccione una opcion
            </option>
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
        <Button
          type="submit"
          variant="danger"
          className="ms-3"
          onClick={volverAdministrador}
        >
          Cancelar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioReceta;
