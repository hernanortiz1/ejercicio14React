const urlrecetas = import.meta.env.VITE_API_RECETAS;
const urlusuarios = import.meta.env.VITE_API_USUARIOS;

console.log(urlrecetas);

export const leerReceta = async () => {
  try {
    const respuesta = await fetch(urlrecetas);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const obtenerRecetaPorID = async (id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const crearReceta = async (recetaNueva) => {
  try {
    const respuesta = await fetch(urlrecetas, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKeyReceta")).token,
      },
      body: JSON.stringify(recetaNueva),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const editarReceta = async (recetaEditada, id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem("userKeyReceta")).token,
      },
      body: JSON.stringify(recetaEditada),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const borrarRecetaPorID = async (id) => {
  try {
    const respuesta = await fetch(urlrecetas + `/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem("userKeyReceta")).token,
      },
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const login = async (datosUsuario) => {
  try {
    const respuesta = await fetch(urlusuarios + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosUsuario),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const registroUsuarios = async (nuevoUsuario) => {
  try {
    const respuesta = await fetch(urlusuarios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });
   
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};
