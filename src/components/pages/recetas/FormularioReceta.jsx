import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FormularioReceta = ({ recetas, setRecetas, titulo }) => {
  const navigate = useNavigate();
  const { id } = useParams();

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
    if (id) {
      const recetaEditar = recetas.find((receta) => receta.id === id);
      if (recetaEditar) {
        reset(recetaEditar);
      }
    }
  }, [id, recetas, reset]);

  const guardarReceta = (datos) => {
    if (id) {
      // EDITAR RECETA
      const recetasActualizadas = recetas.map((receta) =>
        receta.id === id ? { ...datos, id } : receta
      );
      setRecetas(recetasActualizadas);

      Swal.fire({
        title: "Receta actualizada correctamente",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/administrador");
      });
    } else {
      // CREAR RECETA
      const nuevaReceta = {
        ...datos,
        id: crypto.randomUUID(),
      };
      setRecetas([...recetas, nuevaReceta]);

      Swal.fire({
        title: "Receta creada correctamente",
        text: `Receta: ${datos.nombreReceta}, categoría: ${datos.categoria}`,
        icon: "success",
        confirmButtonText: "Ir al administrador",
        showCancelButton: true,
        cancelButtonText: "Quedarme aquí",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/administrador");
        } else {
          reset();
        }
      });
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(guardarReceta)}>
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
                  /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png))$/,
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
            <option value="Platos principales">Platos principales</option>
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
                value: 500,
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
          type="button"
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
