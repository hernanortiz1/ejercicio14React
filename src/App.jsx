import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./components/pages/Login";
import Administrador from "./components/pages/Administrador";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import ProtectorAdmin from "./components/routes/ProtectorAdmin";
import FormularioReceta from "./components/pages/recetas/FormularioReceta";
import DetalleReceta from "./components/pages/recetas/DetalleReceta";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKeyReceta")) || {};
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  const [recetas, setRecetas] = useState(() => {
    return JSON.parse(localStorage.getItem("catalogoRecetas")) || [];
  });

  const crearReceta = (recetaNueva) => {
    recetaNueva.id = uuidv4();
    setRecetas([...recetas, recetaNueva]);
    return true;
  };

  const borrarReceta = (idReceta) => {
    const recetasFiltradas = recetas.filter(
      (itemReceta) => itemReceta.id !== idReceta
    );
    setRecetas(recetasFiltradas);
    return true;
  };

  const buscarReceta = (idReceta) => {
    const recetaBuscada = recetas.find(
      (itemReceta) => itemReceta.id === idReceta
    );
    return recetaBuscada;
  };

  const editarReceta = (idReceta, recetaActualizada) => {
    const recetasEditadas = recetas.map((itemReceta) => {
      if (itemReceta.id === idReceta) {
        return {
          ...itemReceta,
          ...recetaActualizada,
        };
      } else {
        return itemReceta;
      }
    });

    setRecetas(recetasEditadas);

    return true;
  };

  useEffect(() => {
    localStorage.setItem("catalogoRecetas", JSON.stringify(recetas));
  }, [recetas]);
  useEffect(() => {
    sessionStorage.setItem("userKeyReceta", JSON.stringify(usuarioAdmin));
  }, [usuarioAdmin]);

  return (
    <>
      <BrowserRouter>
        <Menu
          usuarioAdmin={usuarioAdmin}
          setUsuarioAdmin={setUsuarioAdmin}
        ></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio recetas={recetas} />}></Route>

            <Route
              path="/login"
              element={<Login setUsuarioAdmin={setUsuarioAdmin}></Login>}
            ></Route>

            {/* btn VER MAS */}
            <Route
              path="/detalle/:id"
              element={<DetalleReceta buscarReceta={buscarReceta} />}
            />

            <Route
              path="/administrador"
              element={<ProtectorAdmin isAdmin={usuarioAdmin}></ProtectorAdmin>}
            >
              <Route
                index
                element={
                  <Administrador
                    setRecetas={setRecetas}
                    recetas={recetas}
                    borrarReceta={borrarReceta}
                  ></Administrador>
                }
              ></Route>

              <Route
                path="crear"
                element={
                  <FormularioReceta
                    crearReceta={crearReceta}
                    titulo={"Crear receta"}
                  ></FormularioReceta>
                }
              ></Route>
              <Route
                path="editar/:id"
                element={
                  <FormularioReceta
                    buscarReceta={buscarReceta}
                    editarReceta={editarReceta}
                    titulo={"Editar receta"}
                  ></FormularioReceta>
                }
              ></Route>
            </Route>

            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
