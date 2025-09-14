import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearReceta, obtenerRecetaPorID, editarReceta } from "../../../helpers/queries.js";

const FormularioReceta = ({ recetas, setRecetas, titulo }) => {
  const navigate = useNavigate();

  const volverAdministrador = () => {
    navigate("/administrador");
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    obtenerReceta()
  }, []);


  const obtenerReceta = async () => {
    if (titulo === "Editar receta") {
     
      const respuesta = await obtenerRecetaPorID(id);

      if (respuesta.status === 200) {
        const recetaBuscada = await respuesta.json();

        setValue("nombreReceta", recetaBuscada.nombreReceta);
        setValue("imagen", recetaBuscada.imagen);
        setValue("categoria", recetaBuscada.categoria);
        setValue("descripcion_breve", recetaBuscada.descripcion_breve);
        setValue("descripcion_amplia", recetaBuscada.descripcion_amplia);
      }
    }
  };


const onSubmit = async (receta) => {
    if (titulo === "Crear receta") {
      const respuesta = await crearReceta(receta);

      if (respuesta.status === 201) {
        Swal.fire({
          title: "Receta creada",
          text: `La receta ${receta.nombreReceta} fue creada correctamente`,
          icon: "success",
        });
        reset();
      }
    } else {

     const respuesta = await editarReceta(receta, id)
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Receta editada",
          text: `La receta ${receta.nombreReceta} fue editada correctamente`,
          icon: "success",
        });
        navigate("/administrador")
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{titulo}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("descripcion_breve", {
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
            {errors.descripcion_breve?.message}
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
            {...register("descripcion_amplia", {
              required: "La descripción  es un dato obligatorio",
              minLength: {
                value: 10,
                message: "La descripción debe tener 10 caracteres como minimo ",
              },
              maxLength: {
                value: 500,
                message: "La descripción debe tener 500 caracteres como máximo",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.descripcion_amplia?.message}
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
