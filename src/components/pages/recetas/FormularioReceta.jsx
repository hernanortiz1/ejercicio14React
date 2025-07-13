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
            required
            type="text"
            placeholder="Ej: Receta de..."
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
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://images.pexels.com/photos/1470166/pexels-photo-1470166.jpeg"
            {...register("imagen", {
              required: "La URL de imagen es obligatoria",
              pattern: {
                value:
                  /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*\.(jpg|jpeg|png)$/,
                message: "Debe ser una URL válida de imagen (jpg, png, etc.)",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            required
            {...register("categoria", {
              required: "La categoria es un dato obligatorio",
            })}
          >
            <option value="" hidden>
              Seleccione una opcion
            </option>
            <option value="Desayunos">Desayunos</option>
            <option value="Platos_principales">Platos principales</option>
            <option value="Postres">Postres</option>
            <option value="Bebidas">Bebidas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción breve*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Describe brevemente la receta, sus ingredientes y el sabor"
            as="textarea"
            required
            {...register("descripcionBreve", {
              required: "La descripción  es un dato obligatorio",
              minLength: {
                value: 3,
                message: "La descripción debe tener 3 caracteres como minimo ",
              },
              maxLength: {
                value: 100,
                message: "La descripción debe tener 100 caracteres como máximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionBreve?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Descripción Amplia*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Una receta deliciosa y fácil de preparar, ideal para compartir en familia o con amigos. Incluye ingredientes accesibles y pasos sencillos para lograr un plato sabroso y casero."
            as="textarea"
            rows={4}
            required
            {...register("descripcionAmplia", {
              required: "La descripción  es un dato obligatorio",
              minLength: {
                value: 10,
                message: "La descripción debe tener 10 caracteres como minimo ",
              },
              maxLength: {
                value: 200,
                message: "La descripción debe tener 200 caracteres como máximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcionAmplia?.message}
          </Form.Text>
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
