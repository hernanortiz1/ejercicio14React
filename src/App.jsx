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

function App() {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("userKeyReceta")) || false;
  const [usuarioAdmin, setUsuarioAdmin] = useState(usuarioLogueado);
  const [recetas, setRecetas] = useState(() => {
    return JSON.parse(localStorage.getItem("catalogoRecetas")) || [];
  });
  useEffect(() => {
    localStorage.setItem("catalogoRecetas", JSON.stringify(recetas));
  }, [recetas]);
  // se ejecuta en montaje

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
              element={<DetalleReceta recetas={recetas} />}
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
                  ></Administrador>
                }
              ></Route>

              <Route
                path="crear"
                element={
                  <FormularioReceta
                    recetas={recetas}
                    setRecetas={setRecetas}
                    titulo={"Crear receta"}
                  ></FormularioReceta>
                }
              ></Route>
              <Route
                path="editar/:id"
                element={
                  <FormularioReceta
                    recetas={recetas}
                    setRecetas={setRecetas}
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
